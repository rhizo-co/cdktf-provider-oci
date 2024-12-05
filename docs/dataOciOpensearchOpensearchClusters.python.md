# `dataOciOpensearchOpensearchClusters` Submodule <a name="`dataOciOpensearchOpensearchClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpensearchOpensearchClusters <a name="DataOciOpensearchOpensearchClusters" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters oci_opensearch_opensearch_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOpensearchOpensearchClustersFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#compartment_id DataOciOpensearchOpensearchClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#display_name DataOciOpensearchOpensearchClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#id DataOciOpensearchOpensearchClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#state DataOciOpensearchOpensearchClusters#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#compartment_id DataOciOpensearchOpensearchClusters#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#display_name DataOciOpensearchOpensearchClusters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#filter DataOciOpensearchOpensearchClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#id DataOciOpensearchOpensearchClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#state DataOciOpensearchOpensearchClusters#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOpensearchOpensearchClustersFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOpensearchOpensearchClusters resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOpensearchOpensearchClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOpensearchOpensearchClusters to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOpensearchOpensearchClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpensearchOpensearchClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList">DataOciOpensearchOpensearchClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.opensearchClusterCollection">opensearch_cluster_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.filter"></a>

```python
filter: DataOciOpensearchOpensearchClustersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList">DataOciOpensearchOpensearchClustersFilterList</a>

---

##### `opensearch_cluster_collection`<sup>Required</sup> <a name="opensearch_cluster_collection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.opensearchClusterCollection"></a>

```python
opensearch_cluster_collection: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOpensearchOpensearchClustersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpensearchOpensearchClustersConfig <a name="DataOciOpensearchOpensearchClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOpensearchOpensearchClustersFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#compartment_id DataOciOpensearchOpensearchClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#display_name DataOciOpensearchOpensearchClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#id DataOciOpensearchOpensearchClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#state DataOciOpensearchOpensearchClusters#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#compartment_id DataOciOpensearchOpensearchClusters#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#display_name DataOciOpensearchOpensearchClusters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOpensearchOpensearchClustersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#filter DataOciOpensearchOpensearchClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#id DataOciOpensearchOpensearchClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#state DataOciOpensearchOpensearchClusters#state}.

---

### DataOciOpensearchOpensearchClustersFilter <a name="DataOciOpensearchOpensearchClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#name DataOciOpensearchOpensearchClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#values DataOciOpensearchOpensearchClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#regex DataOciOpensearchOpensearchClusters#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#name DataOciOpensearchOpensearchClusters#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#values DataOciOpensearchOpensearchClusters#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#regex DataOciOpensearchOpensearchClusters#regex}.

---

### DataOciOpensearchOpensearchClustersOpensearchClusterCollection <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection()
```


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpensearchOpensearchClustersFilterList <a name="DataOciOpensearchOpensearchClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpensearchOpensearchClustersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOpensearchOpensearchClustersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>]]

---


### DataOciOpensearchOpensearchClustersFilterOutputReference <a name="DataOciOpensearchOpensearchClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOpensearchOpensearchClustersFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>]

---


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.availabilityDomains">availability_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeCount">data_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostBareMetalShape">data_node_host_bare_metal_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostMemoryGb">data_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostOcpuCount">data_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostType">data_node_host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeStorageGb">data_node_storage_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeCount">master_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostBareMetalShape">master_node_host_bare_metal_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostMemoryGb">master_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostOcpuCount">master_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostType">master_node_host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardFqdn">opendashboard_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeCount">opendashboard_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeHostMemoryGb">opendashboard_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeHostOcpuCount">opendashboard_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardPrivateIp">opendashboard_private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opensearchFqdn">opensearch_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opensearchPrivateIp">opensearch_private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMasterUserName">security_master_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMasterUserPasswordHash">security_master_user_password_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMode">security_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.softwareVersion">software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.subnetCompartmentId">subnet_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeDeleted">time_deleted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.totalStorageGb">total_storage_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.vcnCompartmentId">vcn_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domains`<sup>Required</sup> <a name="availability_domains" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.availabilityDomains"></a>

```python
availability_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `data_node_count`<sup>Required</sup> <a name="data_node_count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeCount"></a>

```python
data_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_node_host_bare_metal_shape`<sup>Required</sup> <a name="data_node_host_bare_metal_shape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostBareMetalShape"></a>

```python
data_node_host_bare_metal_shape: str
```

- *Type:* str

---

##### `data_node_host_memory_gb`<sup>Required</sup> <a name="data_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostMemoryGb"></a>

```python
data_node_host_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_node_host_ocpu_count`<sup>Required</sup> <a name="data_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostOcpuCount"></a>

```python
data_node_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_node_host_type`<sup>Required</sup> <a name="data_node_host_type" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostType"></a>

```python
data_node_host_type: str
```

- *Type:* str

---

##### `data_node_storage_gb`<sup>Required</sup> <a name="data_node_storage_gb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeStorageGb"></a>

```python
data_node_storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `master_node_count`<sup>Required</sup> <a name="master_node_count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeCount"></a>

```python
master_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_host_bare_metal_shape`<sup>Required</sup> <a name="master_node_host_bare_metal_shape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostBareMetalShape"></a>

```python
master_node_host_bare_metal_shape: str
```

- *Type:* str

---

##### `master_node_host_memory_gb`<sup>Required</sup> <a name="master_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostMemoryGb"></a>

```python
master_node_host_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_host_ocpu_count`<sup>Required</sup> <a name="master_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostOcpuCount"></a>

```python
master_node_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_host_type`<sup>Required</sup> <a name="master_node_host_type" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostType"></a>

```python
master_node_host_type: str
```

- *Type:* str

---

##### `opendashboard_fqdn`<sup>Required</sup> <a name="opendashboard_fqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardFqdn"></a>

```python
opendashboard_fqdn: str
```

- *Type:* str

---

##### `opendashboard_node_count`<sup>Required</sup> <a name="opendashboard_node_count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeCount"></a>

```python
opendashboard_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opendashboard_node_host_memory_gb`<sup>Required</sup> <a name="opendashboard_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeHostMemoryGb"></a>

```python
opendashboard_node_host_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opendashboard_node_host_ocpu_count`<sup>Required</sup> <a name="opendashboard_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeHostOcpuCount"></a>

```python
opendashboard_node_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opendashboard_private_ip`<sup>Required</sup> <a name="opendashboard_private_ip" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardPrivateIp"></a>

```python
opendashboard_private_ip: str
```

- *Type:* str

---

##### `opensearch_fqdn`<sup>Required</sup> <a name="opensearch_fqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opensearchFqdn"></a>

```python
opensearch_fqdn: str
```

- *Type:* str

---

##### `opensearch_private_ip`<sup>Required</sup> <a name="opensearch_private_ip" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opensearchPrivateIp"></a>

```python
opensearch_private_ip: str
```

- *Type:* str

---

##### `security_master_user_name`<sup>Required</sup> <a name="security_master_user_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMasterUserName"></a>

```python
security_master_user_name: str
```

- *Type:* str

---

##### `security_master_user_password_hash`<sup>Required</sup> <a name="security_master_user_password_hash" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMasterUserPasswordHash"></a>

```python
security_master_user_password_hash: str
```

- *Type:* str

---

##### `security_mode`<sup>Required</sup> <a name="security_mode" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMode"></a>

```python
security_mode: str
```

- *Type:* str

---

##### `software_version`<sup>Required</sup> <a name="software_version" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.softwareVersion"></a>

```python
software_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_compartment_id`<sup>Required</sup> <a name="subnet_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.subnetCompartmentId"></a>

```python
subnet_compartment_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_deleted`<sup>Required</sup> <a name="time_deleted" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeDeleted"></a>

```python
time_deleted: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `total_storage_gb`<sup>Required</sup> <a name="total_storage_gb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.totalStorageGb"></a>

```python
total_storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcn_compartment_id`<sup>Required</sup> <a name="vcn_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.vcnCompartmentId"></a>

```python
vcn_compartment_id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems</a>

---


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_clusters

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection">DataOciOpensearchOpensearchClustersOpensearchClusterCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.items"></a>

```python
items: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpensearchOpensearchClustersOpensearchClusterCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection">DataOciOpensearchOpensearchClustersOpensearchClusterCollection</a>

---




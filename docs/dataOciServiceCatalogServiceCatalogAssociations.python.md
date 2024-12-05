# `dataOciServiceCatalogServiceCatalogAssociations` Submodule <a name="`dataOciServiceCatalogServiceCatalogAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogServiceCatalogAssociations <a name="DataOciServiceCatalogServiceCatalogAssociations" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations oci_service_catalog_service_catalog_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entity_id: str = None,
  entity_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciServiceCatalogServiceCatalogAssociationsFilter]] = None,
  id: str = None,
  service_catalog_association_id: str = None,
  service_catalog_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.entityId">entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_id DataOciServiceCatalogServiceCatalogAssociations#entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_type DataOciServiceCatalogServiceCatalogAssociations#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#id DataOciServiceCatalogServiceCatalogAssociations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.serviceCatalogAssociationId">service_catalog_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.serviceCatalogId">service_catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entity_id`<sup>Optional</sup> <a name="entity_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.entityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_id DataOciServiceCatalogServiceCatalogAssociations#entity_id}.

---

##### `entity_type`<sup>Optional</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.entityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_type DataOciServiceCatalogServiceCatalogAssociations#entity_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#filter DataOciServiceCatalogServiceCatalogAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#id DataOciServiceCatalogServiceCatalogAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service_catalog_association_id`<sup>Optional</sup> <a name="service_catalog_association_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.serviceCatalogAssociationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_association_id}.

---

##### `service_catalog_id`<sup>Optional</sup> <a name="service_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.serviceCatalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetEntityId">reset_entity_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetEntityType">reset_entity_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetServiceCatalogAssociationId">reset_service_catalog_association_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetServiceCatalogId">reset_service_catalog_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciServiceCatalogServiceCatalogAssociationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>]]

---

##### `reset_entity_id` <a name="reset_entity_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetEntityId"></a>

```python
def reset_entity_id() -> None
```

##### `reset_entity_type` <a name="reset_entity_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetEntityType"></a>

```python
def reset_entity_type() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_service_catalog_association_id` <a name="reset_service_catalog_association_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetServiceCatalogAssociationId"></a>

```python
def reset_service_catalog_association_id() -> None
```

##### `reset_service_catalog_id` <a name="reset_service_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetServiceCatalogId"></a>

```python
def reset_service_catalog_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciServiceCatalogServiceCatalogAssociations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciServiceCatalogServiceCatalogAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogServiceCatalogAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList">DataOciServiceCatalogServiceCatalogAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationCollection">service_catalog_association_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationIdInput">service_catalog_association_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogIdInput">service_catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationId">service_catalog_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogId">service_catalog_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.filter"></a>

```python
filter: DataOciServiceCatalogServiceCatalogAssociationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList">DataOciServiceCatalogServiceCatalogAssociationsFilterList</a>

---

##### `service_catalog_association_collection`<sup>Required</sup> <a name="service_catalog_association_collection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationCollection"></a>

```python
service_catalog_association_collection: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList</a>

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciServiceCatalogServiceCatalogAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_catalog_association_id_input`<sup>Optional</sup> <a name="service_catalog_association_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationIdInput"></a>

```python
service_catalog_association_id_input: str
```

- *Type:* str

---

##### `service_catalog_id_input`<sup>Optional</sup> <a name="service_catalog_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogIdInput"></a>

```python
service_catalog_id_input: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_catalog_association_id`<sup>Required</sup> <a name="service_catalog_association_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationId"></a>

```python
service_catalog_association_id: str
```

- *Type:* str

---

##### `service_catalog_id`<sup>Required</sup> <a name="service_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogId"></a>

```python
service_catalog_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogServiceCatalogAssociationsConfig <a name="DataOciServiceCatalogServiceCatalogAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entity_id: str = None,
  entity_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciServiceCatalogServiceCatalogAssociationsFilter]] = None,
  id: str = None,
  service_catalog_association_id: str = None,
  service_catalog_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.entityId">entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_id DataOciServiceCatalogServiceCatalogAssociations#entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_type DataOciServiceCatalogServiceCatalogAssociations#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#id DataOciServiceCatalogServiceCatalogAssociations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.serviceCatalogAssociationId">service_catalog_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.serviceCatalogId">service_catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entity_id`<sup>Optional</sup> <a name="entity_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_id DataOciServiceCatalogServiceCatalogAssociations#entity_id}.

---

##### `entity_type`<sup>Optional</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_type DataOciServiceCatalogServiceCatalogAssociations#entity_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciServiceCatalogServiceCatalogAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#filter DataOciServiceCatalogServiceCatalogAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#id DataOciServiceCatalogServiceCatalogAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service_catalog_association_id`<sup>Optional</sup> <a name="service_catalog_association_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.serviceCatalogAssociationId"></a>

```python
service_catalog_association_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_association_id}.

---

##### `service_catalog_id`<sup>Optional</sup> <a name="service_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.serviceCatalogId"></a>

```python
service_catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_id}.

---

### DataOciServiceCatalogServiceCatalogAssociationsFilter <a name="DataOciServiceCatalogServiceCatalogAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#name DataOciServiceCatalogServiceCatalogAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#values DataOciServiceCatalogServiceCatalogAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#regex DataOciServiceCatalogServiceCatalogAssociations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#name DataOciServiceCatalogServiceCatalogAssociations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#values DataOciServiceCatalogServiceCatalogAssociations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#regex DataOciServiceCatalogServiceCatalogAssociations#regex}.

---

### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection()
```


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceCatalogServiceCatalogAssociationsFilterList <a name="DataOciServiceCatalogServiceCatalogAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciServiceCatalogServiceCatalogAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>]]

---


### DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference <a name="DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciServiceCatalogServiceCatalogAssociationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>]

---


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.serviceCatalogId">service_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_catalog_id`<sup>Required</sup> <a name="service_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.serviceCatalogId"></a>

```python
service_catalog_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems</a>

---


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_service_catalog_associations

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.items"></a>

```python
items: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection</a>

---




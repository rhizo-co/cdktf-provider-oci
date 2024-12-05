# `dataOciCertificatesManagementAssociations` Submodule <a name="`dataOciCertificatesManagementAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementAssociations <a name="DataOciCertificatesManagementAssociations" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations oci_certificates_management_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  associated_resource_id: str = None,
  association_id: str = None,
  association_type: str = None,
  certificates_resource_id: str = None,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementAssociationsFilter]] = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.associatedResourceId">associated_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#associated_resource_id DataOciCertificatesManagementAssociations#associated_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.associationId">association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#association_id DataOciCertificatesManagementAssociations#association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.associationType">association_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#association_type DataOciCertificatesManagementAssociations#association_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.certificatesResourceId">certificates_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#certificates_resource_id DataOciCertificatesManagementAssociations#certificates_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#compartment_id DataOciCertificatesManagementAssociations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter">DataOciCertificatesManagementAssociationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#id DataOciCertificatesManagementAssociations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#name DataOciCertificatesManagementAssociations#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `associated_resource_id`<sup>Optional</sup> <a name="associated_resource_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.associatedResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#associated_resource_id DataOciCertificatesManagementAssociations#associated_resource_id}.

---

##### `association_id`<sup>Optional</sup> <a name="association_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.associationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#association_id DataOciCertificatesManagementAssociations#association_id}.

---

##### `association_type`<sup>Optional</sup> <a name="association_type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.associationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#association_type DataOciCertificatesManagementAssociations#association_type}.

---

##### `certificates_resource_id`<sup>Optional</sup> <a name="certificates_resource_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.certificatesResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#certificates_resource_id DataOciCertificatesManagementAssociations#certificates_resource_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#compartment_id DataOciCertificatesManagementAssociations#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter">DataOciCertificatesManagementAssociationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#filter DataOciCertificatesManagementAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#id DataOciCertificatesManagementAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#name DataOciCertificatesManagementAssociations#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetAssociatedResourceId">reset_associated_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetAssociationId">reset_association_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetAssociationType">reset_association_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetCertificatesResourceId">reset_certificates_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementAssociationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter">DataOciCertificatesManagementAssociationsFilter</a>]]

---

##### `reset_associated_resource_id` <a name="reset_associated_resource_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetAssociatedResourceId"></a>

```python
def reset_associated_resource_id() -> None
```

##### `reset_association_id` <a name="reset_association_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetAssociationId"></a>

```python
def reset_association_id() -> None
```

##### `reset_association_type` <a name="reset_association_type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetAssociationType"></a>

```python
def reset_association_type() -> None
```

##### `reset_certificates_resource_id` <a name="reset_certificates_resource_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetCertificatesResourceId"></a>

```python
def reset_certificates_resource_id() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCertificatesManagementAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCertificatesManagementAssociations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCertificatesManagementAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associationCollection">association_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList">DataOciCertificatesManagementAssociationsAssociationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList">DataOciCertificatesManagementAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associatedResourceIdInput">associated_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associationIdInput">association_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associationTypeInput">association_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.certificatesResourceIdInput">certificates_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter">DataOciCertificatesManagementAssociationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associatedResourceId">associated_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associationType">association_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.certificatesResourceId">certificates_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `association_collection`<sup>Required</sup> <a name="association_collection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associationCollection"></a>

```python
association_collection: DataOciCertificatesManagementAssociationsAssociationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList">DataOciCertificatesManagementAssociationsAssociationCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.filter"></a>

```python
filter: DataOciCertificatesManagementAssociationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList">DataOciCertificatesManagementAssociationsFilterList</a>

---

##### `associated_resource_id_input`<sup>Optional</sup> <a name="associated_resource_id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associatedResourceIdInput"></a>

```python
associated_resource_id_input: str
```

- *Type:* str

---

##### `association_id_input`<sup>Optional</sup> <a name="association_id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associationIdInput"></a>

```python
association_id_input: str
```

- *Type:* str

---

##### `association_type_input`<sup>Optional</sup> <a name="association_type_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associationTypeInput"></a>

```python
association_type_input: str
```

- *Type:* str

---

##### `certificates_resource_id_input`<sup>Optional</sup> <a name="certificates_resource_id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.certificatesResourceIdInput"></a>

```python
certificates_resource_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter">DataOciCertificatesManagementAssociationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `associated_resource_id`<sup>Required</sup> <a name="associated_resource_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associatedResourceId"></a>

```python
associated_resource_id: str
```

- *Type:* str

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `association_type`<sup>Required</sup> <a name="association_type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.associationType"></a>

```python
association_type: str
```

- *Type:* str

---

##### `certificates_resource_id`<sup>Required</sup> <a name="certificates_resource_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.certificatesResourceId"></a>

```python
certificates_resource_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementAssociationsAssociationCollection <a name="DataOciCertificatesManagementAssociationsAssociationCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollection()
```


### DataOciCertificatesManagementAssociationsAssociationCollectionItems <a name="DataOciCertificatesManagementAssociationsAssociationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItems()
```


### DataOciCertificatesManagementAssociationsConfig <a name="DataOciCertificatesManagementAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  associated_resource_id: str = None,
  association_id: str = None,
  association_type: str = None,
  certificates_resource_id: str = None,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementAssociationsFilter]] = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.associatedResourceId">associated_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#associated_resource_id DataOciCertificatesManagementAssociations#associated_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.associationId">association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#association_id DataOciCertificatesManagementAssociations#association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.associationType">association_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#association_type DataOciCertificatesManagementAssociations#association_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.certificatesResourceId">certificates_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#certificates_resource_id DataOciCertificatesManagementAssociations#certificates_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#compartment_id DataOciCertificatesManagementAssociations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter">DataOciCertificatesManagementAssociationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#id DataOciCertificatesManagementAssociations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#name DataOciCertificatesManagementAssociations#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `associated_resource_id`<sup>Optional</sup> <a name="associated_resource_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.associatedResourceId"></a>

```python
associated_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#associated_resource_id DataOciCertificatesManagementAssociations#associated_resource_id}.

---

##### `association_id`<sup>Optional</sup> <a name="association_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#association_id DataOciCertificatesManagementAssociations#association_id}.

---

##### `association_type`<sup>Optional</sup> <a name="association_type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.associationType"></a>

```python
association_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#association_type DataOciCertificatesManagementAssociations#association_type}.

---

##### `certificates_resource_id`<sup>Optional</sup> <a name="certificates_resource_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.certificatesResourceId"></a>

```python
certificates_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#certificates_resource_id DataOciCertificatesManagementAssociations#certificates_resource_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#compartment_id DataOciCertificatesManagementAssociations#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter">DataOciCertificatesManagementAssociationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#filter DataOciCertificatesManagementAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#id DataOciCertificatesManagementAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#name DataOciCertificatesManagementAssociations#name}.

---

### DataOciCertificatesManagementAssociationsFilter <a name="DataOciCertificatesManagementAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#name DataOciCertificatesManagementAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#values DataOciCertificatesManagementAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#regex DataOciCertificatesManagementAssociations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#name DataOciCertificatesManagementAssociations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#values DataOciCertificatesManagementAssociations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_associations#regex DataOciCertificatesManagementAssociations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementAssociationsAssociationCollectionItemsList <a name="DataOciCertificatesManagementAssociationsAssociationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference <a name="DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.associatedResourceId">associated_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.associationType">association_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.certificatesResourceId">certificates_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItems">DataOciCertificatesManagementAssociationsAssociationCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_resource_id`<sup>Required</sup> <a name="associated_resource_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.associatedResourceId"></a>

```python
associated_resource_id: str
```

- *Type:* str

---

##### `association_type`<sup>Required</sup> <a name="association_type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.associationType"></a>

```python
association_type: str
```

- *Type:* str

---

##### `certificates_resource_id`<sup>Required</sup> <a name="certificates_resource_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.certificatesResourceId"></a>

```python
certificates_resource_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementAssociationsAssociationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItems">DataOciCertificatesManagementAssociationsAssociationCollectionItems</a>

---


### DataOciCertificatesManagementAssociationsAssociationCollectionList <a name="DataOciCertificatesManagementAssociationsAssociationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference <a name="DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList">DataOciCertificatesManagementAssociationsAssociationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollection">DataOciCertificatesManagementAssociationsAssociationCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.property.items"></a>

```python
items: DataOciCertificatesManagementAssociationsAssociationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionItemsList">DataOciCertificatesManagementAssociationsAssociationCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementAssociationsAssociationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsAssociationCollection">DataOciCertificatesManagementAssociationsAssociationCollection</a>

---


### DataOciCertificatesManagementAssociationsFilterList <a name="DataOciCertificatesManagementAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementAssociationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter">DataOciCertificatesManagementAssociationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter">DataOciCertificatesManagementAssociationsFilter</a>]]

---


### DataOciCertificatesManagementAssociationsFilterOutputReference <a name="DataOciCertificatesManagementAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_associations

dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter">DataOciCertificatesManagementAssociationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCertificatesManagementAssociationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementAssociations.DataOciCertificatesManagementAssociationsFilter">DataOciCertificatesManagementAssociationsFilter</a>]

---




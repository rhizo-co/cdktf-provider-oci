# `dataOciIdentityDomainsDynamicResourceGroups` Submodule <a name="`dataOciIdentityDomainsDynamicResourceGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsDynamicResourceGroups <a name="DataOciIdentityDomainsDynamicResourceGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups oci_identity_domains_dynamic_resource_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  dynamic_resource_group_count: typing.Union[int, float] = None,
  dynamic_resource_group_filter: str = None,
  id: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#idcs_endpoint DataOciIdentityDomainsDynamicResourceGroups#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attributes DataOciIdentityDomainsDynamicResourceGroups#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attribute_sets DataOciIdentityDomainsDynamicResourceGroups#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#authorization DataOciIdentityDomainsDynamicResourceGroups#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#compartment_id DataOciIdentityDomainsDynamicResourceGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.dynamicResourceGroupCount">dynamic_resource_group_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_count DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.dynamicResourceGroupFilter">dynamic_resource_group_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_filter DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#id DataOciIdentityDomainsDynamicResourceGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#resource_type_schema_version DataOciIdentityDomainsDynamicResourceGroups#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_by DataOciIdentityDomainsDynamicResourceGroups#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_order DataOciIdentityDomainsDynamicResourceGroups#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#start_index DataOciIdentityDomainsDynamicResourceGroups#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#idcs_endpoint DataOciIdentityDomainsDynamicResourceGroups#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attributes DataOciIdentityDomainsDynamicResourceGroups#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attribute_sets DataOciIdentityDomainsDynamicResourceGroups#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#authorization DataOciIdentityDomainsDynamicResourceGroups#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#compartment_id DataOciIdentityDomainsDynamicResourceGroups#compartment_id}.

---

##### `dynamic_resource_group_count`<sup>Optional</sup> <a name="dynamic_resource_group_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.dynamicResourceGroupCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_count DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_count}.

---

##### `dynamic_resource_group_filter`<sup>Optional</sup> <a name="dynamic_resource_group_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.dynamicResourceGroupFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_filter DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#id DataOciIdentityDomainsDynamicResourceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#resource_type_schema_version DataOciIdentityDomainsDynamicResourceGroups#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_by DataOciIdentityDomainsDynamicResourceGroups#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_order DataOciIdentityDomainsDynamicResourceGroups#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#start_index DataOciIdentityDomainsDynamicResourceGroups#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetDynamicResourceGroupCount">reset_dynamic_resource_group_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetDynamicResourceGroupFilter">reset_dynamic_resource_group_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_dynamic_resource_group_count` <a name="reset_dynamic_resource_group_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetDynamicResourceGroupCount"></a>

```python
def reset_dynamic_resource_group_count() -> None
```

##### `reset_dynamic_resource_group_filter` <a name="reset_dynamic_resource_group_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetDynamicResourceGroupFilter"></a>

```python
def reset_dynamic_resource_group_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsDynamicResourceGroups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsDynamicResourceGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsDynamicResourceGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsDynamicResourceGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsDynamicResourceGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroups">dynamic_resource_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupCountInput">dynamic_resource_group_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupFilterInput">dynamic_resource_group_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupCount">dynamic_resource_group_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupFilter">dynamic_resource_group_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `dynamic_resource_groups`<sup>Required</sup> <a name="dynamic_resource_groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroups"></a>

```python
dynamic_resource_groups: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList</a>

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `dynamic_resource_group_count_input`<sup>Optional</sup> <a name="dynamic_resource_group_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupCountInput"></a>

```python
dynamic_resource_group_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dynamic_resource_group_filter_input`<sup>Optional</sup> <a name="dynamic_resource_group_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupFilterInput"></a>

```python
dynamic_resource_group_filter_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `dynamic_resource_group_count`<sup>Required</sup> <a name="dynamic_resource_group_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupCount"></a>

```python
dynamic_resource_group_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dynamic_resource_group_filter`<sup>Required</sup> <a name="dynamic_resource_group_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupFilter"></a>

```python
dynamic_resource_group_filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsDynamicResourceGroupsConfig <a name="DataOciIdentityDomainsDynamicResourceGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  dynamic_resource_group_count: typing.Union[int, float] = None,
  dynamic_resource_group_filter: str = None,
  id: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#idcs_endpoint DataOciIdentityDomainsDynamicResourceGroups#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attributes DataOciIdentityDomainsDynamicResourceGroups#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attribute_sets DataOciIdentityDomainsDynamicResourceGroups#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#authorization DataOciIdentityDomainsDynamicResourceGroups#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#compartment_id DataOciIdentityDomainsDynamicResourceGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dynamicResourceGroupCount">dynamic_resource_group_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_count DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dynamicResourceGroupFilter">dynamic_resource_group_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_filter DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#id DataOciIdentityDomainsDynamicResourceGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#resource_type_schema_version DataOciIdentityDomainsDynamicResourceGroups#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_by DataOciIdentityDomainsDynamicResourceGroups#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_order DataOciIdentityDomainsDynamicResourceGroups#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#start_index DataOciIdentityDomainsDynamicResourceGroups#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#idcs_endpoint DataOciIdentityDomainsDynamicResourceGroups#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attributes DataOciIdentityDomainsDynamicResourceGroups#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attribute_sets DataOciIdentityDomainsDynamicResourceGroups#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#authorization DataOciIdentityDomainsDynamicResourceGroups#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#compartment_id DataOciIdentityDomainsDynamicResourceGroups#compartment_id}.

---

##### `dynamic_resource_group_count`<sup>Optional</sup> <a name="dynamic_resource_group_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dynamicResourceGroupCount"></a>

```python
dynamic_resource_group_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_count DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_count}.

---

##### `dynamic_resource_group_filter`<sup>Optional</sup> <a name="dynamic_resource_group_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dynamicResourceGroupFilter"></a>

```python
dynamic_resource_group_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_filter DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#id DataOciIdentityDomainsDynamicResourceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#resource_type_schema_version DataOciIdentityDomainsDynamicResourceGroups#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_by DataOciIdentityDomainsDynamicResourceGroups#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_order DataOciIdentityDomainsDynamicResourceGroups#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#start_index DataOciIdentityDomainsDynamicResourceGroups#start_index}.

---

### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups()
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles()
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants()
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy()
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta()
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags()
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags()
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags()
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.adminRole">admin_role</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.legacyGroupName">legacy_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_role`<sup>Required</sup> <a name="admin_role" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.adminRole"></a>

```python
admin_role: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `legacy_group_name`<sup>Required</sup> <a name="legacy_group_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.legacyGroupName"></a>

```python
legacy_group_name: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.grantMechanism">grant_mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `grant_mechanism`<sup>Required</sup> <a name="grant_mechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.grantMechanism"></a>

```python
grant_mechanism: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.dynamicGroupAppRoles">dynamic_group_app_roles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.grants">grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.matchingRule">matching_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionOciTags">urnietfparamsscimschemasoracleidcsextension_oci_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `dynamic_group_app_roles`<sup>Required</sup> <a name="dynamic_group_app_roles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.dynamicGroupAppRoles"></a>

```python
dynamic_group_app_roles: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList</a>

---

##### `grants`<sup>Required</sup> <a name="grants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.grants"></a>

```python
grants: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `matching_rule`<sup>Required</sup> <a name="matching_rule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.matchingRule"></a>

```python
matching_rule: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `urnietfparamsscimschemasoracleidcsextension_oci_tags`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextension_oci_tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionOciTags"></a>

```python
urnietfparamsscimschemasoracleidcsextension_oci_tags: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_dynamic_resource_groups

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags">defined_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags">freeform_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug">tag_slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags"></a>

```python
defined_tags: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags"></a>

```python
freeform_tags: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a>

---

##### `tag_slug`<sup>Required</sup> <a name="tag_slug" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug"></a>

```python
tag_slug: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags</a>

---




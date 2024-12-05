# `dataOciIdentityDomainsPasswordPolicies` Submodule <a name="`dataOciIdentityDomainsPasswordPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsPasswordPolicies <a name="DataOciIdentityDomainsPasswordPolicies" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies oci_identity_domains_password_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies(
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
  id: str = None,
  password_policy_count: typing.Union[int, float] = None,
  password_policy_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#idcs_endpoint DataOciIdentityDomainsPasswordPolicies#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attributes DataOciIdentityDomainsPasswordPolicies#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attribute_sets DataOciIdentityDomainsPasswordPolicies#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#authorization DataOciIdentityDomainsPasswordPolicies#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#compartment_id DataOciIdentityDomainsPasswordPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#id DataOciIdentityDomainsPasswordPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.passwordPolicyCount">password_policy_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_count DataOciIdentityDomainsPasswordPolicies#password_policy_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.passwordPolicyFilter">password_policy_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_filter DataOciIdentityDomainsPasswordPolicies#password_policy_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#resource_type_schema_version DataOciIdentityDomainsPasswordPolicies#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_by DataOciIdentityDomainsPasswordPolicies#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_order DataOciIdentityDomainsPasswordPolicies#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#start_index DataOciIdentityDomainsPasswordPolicies#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#idcs_endpoint DataOciIdentityDomainsPasswordPolicies#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attributes DataOciIdentityDomainsPasswordPolicies#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attribute_sets DataOciIdentityDomainsPasswordPolicies#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#authorization DataOciIdentityDomainsPasswordPolicies#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#compartment_id DataOciIdentityDomainsPasswordPolicies#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#id DataOciIdentityDomainsPasswordPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password_policy_count`<sup>Optional</sup> <a name="password_policy_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.passwordPolicyCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_count DataOciIdentityDomainsPasswordPolicies#password_policy_count}.

---

##### `password_policy_filter`<sup>Optional</sup> <a name="password_policy_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.passwordPolicyFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_filter DataOciIdentityDomainsPasswordPolicies#password_policy_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#resource_type_schema_version DataOciIdentityDomainsPasswordPolicies#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_by DataOciIdentityDomainsPasswordPolicies#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_order DataOciIdentityDomainsPasswordPolicies#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#start_index DataOciIdentityDomainsPasswordPolicies#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyCount">reset_password_policy_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyFilter">reset_password_policy_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password_policy_count` <a name="reset_password_policy_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyCount"></a>

```python
def reset_password_policy_count() -> None
```

##### `reset_password_policy_filter` <a name="reset_password_policy_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyFilter"></a>

```python
def reset_password_policy_filter() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsPasswordPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsPasswordPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsPasswordPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsPasswordPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsPasswordPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicies">password_policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCountInput">password_policy_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilterInput">password_policy_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCount">password_policy_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilter">password_policy_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_policies`<sup>Required</sup> <a name="password_policies" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicies"></a>

```python
password_policies: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `password_policy_count_input`<sup>Optional</sup> <a name="password_policy_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCountInput"></a>

```python
password_policy_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_policy_filter_input`<sup>Optional</sup> <a name="password_policy_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilterInput"></a>

```python
password_policy_filter_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `password_policy_count`<sup>Required</sup> <a name="password_policy_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCount"></a>

```python
password_policy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_policy_filter`<sup>Required</sup> <a name="password_policy_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilter"></a>

```python
password_policy_filter: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsPasswordPoliciesConfig <a name="DataOciIdentityDomainsPasswordPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig(
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
  id: str = None,
  password_policy_count: typing.Union[int, float] = None,
  password_policy_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#idcs_endpoint DataOciIdentityDomainsPasswordPolicies#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attributes DataOciIdentityDomainsPasswordPolicies#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attribute_sets DataOciIdentityDomainsPasswordPolicies#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#authorization DataOciIdentityDomainsPasswordPolicies#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#compartment_id DataOciIdentityDomainsPasswordPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#id DataOciIdentityDomainsPasswordPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyCount">password_policy_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_count DataOciIdentityDomainsPasswordPolicies#password_policy_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyFilter">password_policy_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_filter DataOciIdentityDomainsPasswordPolicies#password_policy_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#resource_type_schema_version DataOciIdentityDomainsPasswordPolicies#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_by DataOciIdentityDomainsPasswordPolicies#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_order DataOciIdentityDomainsPasswordPolicies#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#start_index DataOciIdentityDomainsPasswordPolicies#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#idcs_endpoint DataOciIdentityDomainsPasswordPolicies#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attributes DataOciIdentityDomainsPasswordPolicies#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attribute_sets DataOciIdentityDomainsPasswordPolicies#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#authorization DataOciIdentityDomainsPasswordPolicies#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#compartment_id DataOciIdentityDomainsPasswordPolicies#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#id DataOciIdentityDomainsPasswordPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password_policy_count`<sup>Optional</sup> <a name="password_policy_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyCount"></a>

```python
password_policy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_count DataOciIdentityDomainsPasswordPolicies#password_policy_count}.

---

##### `password_policy_filter`<sup>Optional</sup> <a name="password_policy_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyFilter"></a>

```python
password_policy_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_filter DataOciIdentityDomainsPasswordPolicies#password_policy_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#resource_type_schema_version DataOciIdentityDomainsPasswordPolicies#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_by DataOciIdentityDomainsPasswordPolicies#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_order DataOciIdentityDomainsPasswordPolicies#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#start_index DataOciIdentityDomainsPasswordPolicies#start_index}.

---

### DataOciIdentityDomainsPasswordPoliciesPasswordPolicies <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPolicies" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies()
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules()
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups()
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy()
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy()
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta()
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.allowedChars">allowed_chars</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.configuredPasswordPolicyRules">configured_password_policy_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryDelimiter">dictionary_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryLocation">dictionary_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryWordDisallowed">dictionary_word_disallowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedChars">disallowed_chars</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedSubstrings">disallowed_substrings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedUserAttributeValues">disallowed_user_attribute_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.distinctCharacters">distinct_characters</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.firstNameDisallowed">first_name_disallowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.forcePasswordReset">force_password_reset</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.groups">groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lastNameDisallowed">last_name_disallowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lockoutDuration">lockout_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxIncorrectAttempts">max_incorrect_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxRepeatedChars">max_repeated_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxSpecialChars">max_special_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphaNumerals">min_alpha_numerals</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphas">min_alphas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLowerCase">min_lower_case</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minNumerals">min_numerals</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minPasswordAge">min_password_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minSpecialChars">min_special_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUniqueChars">min_unique_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUpperCase">min_upper_case</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.numPasswordsInHistory">num_passwords_in_history</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpiresAfter">password_expires_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpireWarning">password_expire_warning</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordStrength">password_strength</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.requiredChars">required_chars</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.startsWithAlphabet">starts_with_alphabet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.userNameDisallowed">user_name_disallowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies">DataOciIdentityDomainsPasswordPoliciesPasswordPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_chars`<sup>Required</sup> <a name="allowed_chars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.allowedChars"></a>

```python
allowed_chars: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `configured_password_policy_rules`<sup>Required</sup> <a name="configured_password_policy_rules" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.configuredPasswordPolicyRules"></a>

```python
configured_password_policy_rules: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList</a>

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dictionary_delimiter`<sup>Required</sup> <a name="dictionary_delimiter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryDelimiter"></a>

```python
dictionary_delimiter: str
```

- *Type:* str

---

##### `dictionary_location`<sup>Required</sup> <a name="dictionary_location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryLocation"></a>

```python
dictionary_location: str
```

- *Type:* str

---

##### `dictionary_word_disallowed`<sup>Required</sup> <a name="dictionary_word_disallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryWordDisallowed"></a>

```python
dictionary_word_disallowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `disallowed_chars`<sup>Required</sup> <a name="disallowed_chars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedChars"></a>

```python
disallowed_chars: str
```

- *Type:* str

---

##### `disallowed_substrings`<sup>Required</sup> <a name="disallowed_substrings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedSubstrings"></a>

```python
disallowed_substrings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disallowed_user_attribute_values`<sup>Required</sup> <a name="disallowed_user_attribute_values" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedUserAttributeValues"></a>

```python
disallowed_user_attribute_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `distinct_characters`<sup>Required</sup> <a name="distinct_characters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.distinctCharacters"></a>

```python
distinct_characters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `first_name_disallowed`<sup>Required</sup> <a name="first_name_disallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.firstNameDisallowed"></a>

```python
first_name_disallowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `force_password_reset`<sup>Required</sup> <a name="force_password_reset" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.forcePasswordReset"></a>

```python
force_password_reset: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `groups`<sup>Required</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.groups"></a>

```python
groups: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_name_disallowed`<sup>Required</sup> <a name="last_name_disallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lastNameDisallowed"></a>

```python
last_name_disallowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lockout_duration`<sup>Required</sup> <a name="lockout_duration" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lockoutDuration"></a>

```python
lockout_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_incorrect_attempts`<sup>Required</sup> <a name="max_incorrect_attempts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxIncorrectAttempts"></a>

```python
max_incorrect_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_repeated_chars`<sup>Required</sup> <a name="max_repeated_chars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxRepeatedChars"></a>

```python
max_repeated_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_special_chars`<sup>Required</sup> <a name="max_special_chars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxSpecialChars"></a>

```python
max_special_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList</a>

---

##### `min_alpha_numerals`<sup>Required</sup> <a name="min_alpha_numerals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphaNumerals"></a>

```python
min_alpha_numerals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_alphas`<sup>Required</sup> <a name="min_alphas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphas"></a>

```python
min_alphas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_lower_case`<sup>Required</sup> <a name="min_lower_case" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLowerCase"></a>

```python
min_lower_case: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_numerals`<sup>Required</sup> <a name="min_numerals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minNumerals"></a>

```python
min_numerals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_password_age`<sup>Required</sup> <a name="min_password_age" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minPasswordAge"></a>

```python
min_password_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_special_chars`<sup>Required</sup> <a name="min_special_chars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minSpecialChars"></a>

```python
min_special_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_unique_chars`<sup>Required</sup> <a name="min_unique_chars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUniqueChars"></a>

```python
min_unique_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_upper_case`<sup>Required</sup> <a name="min_upper_case" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUpperCase"></a>

```python
min_upper_case: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `num_passwords_in_history`<sup>Required</sup> <a name="num_passwords_in_history" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.numPasswordsInHistory"></a>

```python
num_passwords_in_history: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `password_expires_after`<sup>Required</sup> <a name="password_expires_after" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpiresAfter"></a>

```python
password_expires_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_expire_warning`<sup>Required</sup> <a name="password_expire_warning" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpireWarning"></a>

```python
password_expire_warning: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_strength`<sup>Required</sup> <a name="password_strength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordStrength"></a>

```python
password_strength: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `required_chars`<sup>Required</sup> <a name="required_chars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.requiredChars"></a>

```python
required_chars: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starts_with_alphabet`<sup>Required</sup> <a name="starts_with_alphabet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.startsWithAlphabet"></a>

```python
starts_with_alphabet: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `user_name_disallowed`<sup>Required</sup> <a name="user_name_disallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.userNameDisallowed"></a>

```python
user_name_disallowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsPasswordPoliciesPasswordPolicies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies">DataOciIdentityDomainsPasswordPoliciesPasswordPolicies</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_password_policies

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags</a>

---




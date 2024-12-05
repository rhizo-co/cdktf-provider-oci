# `dataOciIdentityDomainsAccountMgmtInfo` Submodule <a name="`dataOciIdentityDomainsAccountMgmtInfo` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsAccountMgmtInfo <a name="DataOciIdentityDomainsAccountMgmtInfo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info oci_identity_domains_account_mgmt_info}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_mgmt_info_id: str,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  id: str = None,
  resource_type_schema_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.accountMgmtInfoId">account_mgmt_info_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#account_mgmt_info_id DataOciIdentityDomainsAccountMgmtInfo#account_mgmt_info_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfo#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#attributes DataOciIdentityDomainsAccountMgmtInfo#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#attribute_sets DataOciIdentityDomainsAccountMgmtInfo#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#authorization DataOciIdentityDomainsAccountMgmtInfo#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#id DataOciIdentityDomainsAccountMgmtInfo#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfo#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_mgmt_info_id`<sup>Required</sup> <a name="account_mgmt_info_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.accountMgmtInfoId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#account_mgmt_info_id DataOciIdentityDomainsAccountMgmtInfo#account_mgmt_info_id}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfo#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#attributes DataOciIdentityDomainsAccountMgmtInfo#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#attribute_sets DataOciIdentityDomainsAccountMgmtInfo#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#authorization DataOciIdentityDomainsAccountMgmtInfo#authorization}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#id DataOciIdentityDomainsAccountMgmtInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfo#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsAccountMgmtInfo resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsAccountMgmtInfo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsAccountMgmtInfo to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsAccountMgmtInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsAccountMgmtInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.accountType">account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.app">app</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList">DataOciIdentityDomainsAccountMgmtInfoAppList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.compositeKey">composite_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.doNotBackFillGrants">do_not_back_fill_grants</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.doNotPerformActionOnTarget">do_not_perform_action_on_target</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.favorite">favorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList">DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList">DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.isAccount">is_account</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.lastAccessed">last_accessed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.matchingOwners">matching_owners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList">DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList">DataOciIdentityDomainsAccountMgmtInfoMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.objectClass">object_class</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList">DataOciIdentityDomainsAccountMgmtInfoObjectClassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.operationContext">operation_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.owner">owner</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList">DataOciIdentityDomainsAccountMgmtInfoOwnerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.previewOnly">preview_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.resourceType">resource_type</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList">DataOciIdentityDomainsAccountMgmtInfoResourceTypeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.syncResponse">sync_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.syncSituation">sync_situation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.syncTimestamp">sync_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList">DataOciIdentityDomainsAccountMgmtInfoTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.userWalletArtifact">user_wallet_artifact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList">DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.accountMgmtInfoIdInput">account_mgmt_info_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.accountMgmtInfoId">account_mgmt_info_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_type`<sup>Required</sup> <a name="account_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `app`<sup>Required</sup> <a name="app" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.app"></a>

```python
app: DataOciIdentityDomainsAccountMgmtInfoAppList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList">DataOciIdentityDomainsAccountMgmtInfoAppList</a>

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `composite_key`<sup>Required</sup> <a name="composite_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.compositeKey"></a>

```python
composite_key: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `do_not_back_fill_grants`<sup>Required</sup> <a name="do_not_back_fill_grants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.doNotBackFillGrants"></a>

```python
do_not_back_fill_grants: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `do_not_perform_action_on_target`<sup>Required</sup> <a name="do_not_perform_action_on_target" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.doNotPerformActionOnTarget"></a>

```python
do_not_perform_action_on_target: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `favorite`<sup>Required</sup> <a name="favorite" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.favorite"></a>

```python
favorite: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList">DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList">DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_account`<sup>Required</sup> <a name="is_account" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.isAccount"></a>

```python
is_account: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_accessed`<sup>Required</sup> <a name="last_accessed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.lastAccessed"></a>

```python
last_accessed: str
```

- *Type:* str

---

##### `matching_owners`<sup>Required</sup> <a name="matching_owners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.matchingOwners"></a>

```python
matching_owners: DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList">DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.meta"></a>

```python
meta: DataOciIdentityDomainsAccountMgmtInfoMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList">DataOciIdentityDomainsAccountMgmtInfoMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_class`<sup>Required</sup> <a name="object_class" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.objectClass"></a>

```python
object_class: DataOciIdentityDomainsAccountMgmtInfoObjectClassList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList">DataOciIdentityDomainsAccountMgmtInfoObjectClassList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `operation_context`<sup>Required</sup> <a name="operation_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.operationContext"></a>

```python
operation_context: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.owner"></a>

```python
owner: DataOciIdentityDomainsAccountMgmtInfoOwnerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList">DataOciIdentityDomainsAccountMgmtInfoOwnerList</a>

---

##### `preview_only`<sup>Required</sup> <a name="preview_only" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.previewOnly"></a>

```python
preview_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.resourceType"></a>

```python
resource_type: DataOciIdentityDomainsAccountMgmtInfoResourceTypeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList">DataOciIdentityDomainsAccountMgmtInfoResourceTypeList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sync_response`<sup>Required</sup> <a name="sync_response" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.syncResponse"></a>

```python
sync_response: str
```

- *Type:* str

---

##### `sync_situation`<sup>Required</sup> <a name="sync_situation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.syncSituation"></a>

```python
sync_situation: str
```

- *Type:* str

---

##### `sync_timestamp`<sup>Required</sup> <a name="sync_timestamp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.syncTimestamp"></a>

```python
sync_timestamp: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.tags"></a>

```python
tags: DataOciIdentityDomainsAccountMgmtInfoTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList">DataOciIdentityDomainsAccountMgmtInfoTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `user_wallet_artifact`<sup>Required</sup> <a name="user_wallet_artifact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.userWalletArtifact"></a>

```python
user_wallet_artifact: DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList">DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList</a>

---

##### `account_mgmt_info_id_input`<sup>Optional</sup> <a name="account_mgmt_info_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.accountMgmtInfoIdInput"></a>

```python
account_mgmt_info_id_input: str
```

- *Type:* str

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `account_mgmt_info_id`<sup>Required</sup> <a name="account_mgmt_info_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.accountMgmtInfoId"></a>

```python
account_mgmt_info_id: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsAccountMgmtInfoApp <a name="DataOciIdentityDomainsAccountMgmtInfoApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoApp.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoApp()
```


### DataOciIdentityDomainsAccountMgmtInfoConfig <a name="DataOciIdentityDomainsAccountMgmtInfoConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_mgmt_info_id: str,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  id: str = None,
  resource_type_schema_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.accountMgmtInfoId">account_mgmt_info_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#account_mgmt_info_id DataOciIdentityDomainsAccountMgmtInfo#account_mgmt_info_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfo#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#attributes DataOciIdentityDomainsAccountMgmtInfo#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#attribute_sets DataOciIdentityDomainsAccountMgmtInfo#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#authorization DataOciIdentityDomainsAccountMgmtInfo#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#id DataOciIdentityDomainsAccountMgmtInfo#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfo#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_mgmt_info_id`<sup>Required</sup> <a name="account_mgmt_info_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.accountMgmtInfoId"></a>

```python
account_mgmt_info_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#account_mgmt_info_id DataOciIdentityDomainsAccountMgmtInfo#account_mgmt_info_id}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfo#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#attributes DataOciIdentityDomainsAccountMgmtInfo#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#attribute_sets DataOciIdentityDomainsAccountMgmtInfo#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#authorization DataOciIdentityDomainsAccountMgmtInfo#authorization}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#id DataOciIdentityDomainsAccountMgmtInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfo#resource_type_schema_version}.

---

### DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy <a name="DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy()
```


### DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy <a name="DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy()
```


### DataOciIdentityDomainsAccountMgmtInfoMatchingOwners <a name="DataOciIdentityDomainsAccountMgmtInfoMatchingOwners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwners.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwners()
```


### DataOciIdentityDomainsAccountMgmtInfoMeta <a name="DataOciIdentityDomainsAccountMgmtInfoMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMeta()
```


### DataOciIdentityDomainsAccountMgmtInfoObjectClass <a name="DataOciIdentityDomainsAccountMgmtInfoObjectClass" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClass.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClass()
```


### DataOciIdentityDomainsAccountMgmtInfoOwner <a name="DataOciIdentityDomainsAccountMgmtInfoOwner" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwner"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwner.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwner()
```


### DataOciIdentityDomainsAccountMgmtInfoResourceType <a name="DataOciIdentityDomainsAccountMgmtInfoResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceType.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceType()
```


### DataOciIdentityDomainsAccountMgmtInfoTags <a name="DataOciIdentityDomainsAccountMgmtInfoTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTags()
```


### DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact <a name="DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsAccountMgmtInfoAppList <a name="DataOciIdentityDomainsAccountMgmtInfoAppList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfoAppOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfoAppOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoAppOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.appIcon">app_icon</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.appThumbnail">app_thumbnail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isAliasApp">is_alias_app</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isAuthoritative">is_authoritative</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isLoginTarget">is_login_target</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isManagedApp">is_managed_app</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isOauthResource">is_oauth_resource</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isOpcService">is_opc_service</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isUnmanagedApp">is_unmanaged_app</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.loginMechanism">login_mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.meterAsOpcService">meter_as_opc_service</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.serviceTypeUrn">service_type_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.showInMyApps">show_in_my_apps</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoApp">DataOciIdentityDomainsAccountMgmtInfoApp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `app_icon`<sup>Required</sup> <a name="app_icon" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.appIcon"></a>

```python
app_icon: str
```

- *Type:* str

---

##### `app_thumbnail`<sup>Required</sup> <a name="app_thumbnail" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.appThumbnail"></a>

```python
app_thumbnail: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `is_alias_app`<sup>Required</sup> <a name="is_alias_app" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isAliasApp"></a>

```python
is_alias_app: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_authoritative`<sup>Required</sup> <a name="is_authoritative" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isAuthoritative"></a>

```python
is_authoritative: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_login_target`<sup>Required</sup> <a name="is_login_target" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isLoginTarget"></a>

```python
is_login_target: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_managed_app`<sup>Required</sup> <a name="is_managed_app" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isManagedApp"></a>

```python
is_managed_app: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_oauth_resource`<sup>Required</sup> <a name="is_oauth_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isOauthResource"></a>

```python
is_oauth_resource: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_opc_service`<sup>Required</sup> <a name="is_opc_service" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isOpcService"></a>

```python
is_opc_service: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_unmanaged_app`<sup>Required</sup> <a name="is_unmanaged_app" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isUnmanagedApp"></a>

```python
is_unmanaged_app: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `login_mechanism`<sup>Required</sup> <a name="login_mechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.loginMechanism"></a>

```python
login_mechanism: str
```

- *Type:* str

---

##### `meter_as_opc_service`<sup>Required</sup> <a name="meter_as_opc_service" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.meterAsOpcService"></a>

```python
meter_as_opc_service: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `service_type_urn`<sup>Required</sup> <a name="service_type_urn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.serviceTypeUrn"></a>

```python
service_type_urn: str
```

- *Type:* str

---

##### `show_in_my_apps`<sup>Required</sup> <a name="show_in_my_apps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.showInMyApps"></a>

```python
show_in_my_apps: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfoApp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoApp">DataOciIdentityDomainsAccountMgmtInfoApp</a>

---


### DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList <a name="DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy">DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy">DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy</a>

---


### DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList <a name="DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy">DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy">DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList <a name="DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwners">DataOciIdentityDomainsAccountMgmtInfoMatchingOwners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfoMatchingOwners
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwners">DataOciIdentityDomainsAccountMgmtInfoMatchingOwners</a>

---


### DataOciIdentityDomainsAccountMgmtInfoMetaList <a name="DataOciIdentityDomainsAccountMgmtInfoMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMeta">DataOciIdentityDomainsAccountMgmtInfoMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfoMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMeta">DataOciIdentityDomainsAccountMgmtInfoMeta</a>

---


### DataOciIdentityDomainsAccountMgmtInfoObjectClassList <a name="DataOciIdentityDomainsAccountMgmtInfoObjectClassList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClass">DataOciIdentityDomainsAccountMgmtInfoObjectClass</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfoObjectClass
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClass">DataOciIdentityDomainsAccountMgmtInfoObjectClass</a>

---


### DataOciIdentityDomainsAccountMgmtInfoOwnerList <a name="DataOciIdentityDomainsAccountMgmtInfoOwnerList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwner">DataOciIdentityDomainsAccountMgmtInfoOwner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfoOwner
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwner">DataOciIdentityDomainsAccountMgmtInfoOwner</a>

---


### DataOciIdentityDomainsAccountMgmtInfoResourceTypeList <a name="DataOciIdentityDomainsAccountMgmtInfoResourceTypeList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceType">DataOciIdentityDomainsAccountMgmtInfoResourceType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfoResourceType
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceType">DataOciIdentityDomainsAccountMgmtInfoResourceType</a>

---


### DataOciIdentityDomainsAccountMgmtInfoTagsList <a name="DataOciIdentityDomainsAccountMgmtInfoTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTags">DataOciIdentityDomainsAccountMgmtInfoTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfoTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTags">DataOciIdentityDomainsAccountMgmtInfoTags</a>

---


### DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList <a name="DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_info

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact">DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact">DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact</a>

---




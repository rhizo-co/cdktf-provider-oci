# `dataOciIdentityDomainsSecurityQuestionSettings` Submodule <a name="`dataOciIdentityDomainsSecurityQuestionSettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSecurityQuestionSettings <a name="DataOciIdentityDomainsSecurityQuestionSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings oci_identity_domains_security_question_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings(
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
  resource_type_schema_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#idcs_endpoint DataOciIdentityDomainsSecurityQuestionSettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#attributes DataOciIdentityDomainsSecurityQuestionSettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#attribute_sets DataOciIdentityDomainsSecurityQuestionSettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#authorization DataOciIdentityDomainsSecurityQuestionSettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#compartment_id DataOciIdentityDomainsSecurityQuestionSettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#id DataOciIdentityDomainsSecurityQuestionSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#resource_type_schema_version DataOciIdentityDomainsSecurityQuestionSettings#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#idcs_endpoint DataOciIdentityDomainsSecurityQuestionSettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#attributes DataOciIdentityDomainsSecurityQuestionSettings#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#attribute_sets DataOciIdentityDomainsSecurityQuestionSettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#authorization DataOciIdentityDomainsSecurityQuestionSettings#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#compartment_id DataOciIdentityDomainsSecurityQuestionSettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#id DataOciIdentityDomainsSecurityQuestionSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#resource_type_schema_version DataOciIdentityDomainsSecurityQuestionSettings#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSecurityQuestionSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsSecurityQuestionSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsSecurityQuestionSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsSecurityQuestionSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSecurityQuestionSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.securityQuestionSettings">security_question_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_question_settings`<sup>Required</sup> <a name="security_question_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.securityQuestionSettings"></a>

```python
security_question_settings: DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList</a>

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSecurityQuestionSettingsConfig <a name="DataOciIdentityDomainsSecurityQuestionSettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig(
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
  resource_type_schema_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#idcs_endpoint DataOciIdentityDomainsSecurityQuestionSettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#attributes DataOciIdentityDomainsSecurityQuestionSettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#attribute_sets DataOciIdentityDomainsSecurityQuestionSettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#authorization DataOciIdentityDomainsSecurityQuestionSettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#compartment_id DataOciIdentityDomainsSecurityQuestionSettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#id DataOciIdentityDomainsSecurityQuestionSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#resource_type_schema_version DataOciIdentityDomainsSecurityQuestionSettings#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#idcs_endpoint DataOciIdentityDomainsSecurityQuestionSettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#attributes DataOciIdentityDomainsSecurityQuestionSettings#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#attribute_sets DataOciIdentityDomainsSecurityQuestionSettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#authorization DataOciIdentityDomainsSecurityQuestionSettings#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#compartment_id DataOciIdentityDomainsSecurityQuestionSettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#id DataOciIdentityDomainsSecurityQuestionSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_question_settings#resource_type_schema_version DataOciIdentityDomainsSecurityQuestionSettings#resource_type_schema_version}.

---

### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettings <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettings()
```


### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedBy <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedBy()
```


### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMeta <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMeta()
```


### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTags <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedBy">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedBy">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedBy">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedBy">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMeta">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMeta">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMeta</a>

---


### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.maxFieldLength">max_field_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.minAnswerLength">min_answer_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.numQuestionsToAns">num_questions_to_ans</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.numQuestionsToSetup">num_questions_to_setup</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.securityQuestionSettingId">security_question_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettings">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_field_length`<sup>Required</sup> <a name="max_field_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.maxFieldLength"></a>

```python
max_field_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsMetaList</a>

---

##### `min_answer_length`<sup>Required</sup> <a name="min_answer_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.minAnswerLength"></a>

```python
min_answer_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_questions_to_ans`<sup>Required</sup> <a name="num_questions_to_ans" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.numQuestionsToAns"></a>

```python
num_questions_to_ans: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_questions_to_setup`<sup>Required</sup> <a name="num_questions_to_setup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.numQuestionsToSetup"></a>

```python
num_questions_to_setup: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_question_setting_id`<sup>Required</sup> <a name="security_question_setting_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.securityQuestionSettingId"></a>

```python
security_question_setting_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettings">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettings</a>

---


### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference <a name="DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_question_settings

dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTags">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestionSettings.DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTags">DataOciIdentityDomainsSecurityQuestionSettingsSecurityQuestionSettingsTags</a>

---




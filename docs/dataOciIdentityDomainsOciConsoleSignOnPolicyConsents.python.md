# `dataOciIdentityDomainsOciConsoleSignOnPolicyConsents` Submodule <a name="`dataOciIdentityDomainsOciConsoleSignOnPolicyConsents` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsents <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsents" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents oci_identity_domains_oci_console_sign_on_policy_consents}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents(
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
  filter: typing.Union[IResolvable, typing.List[DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter]] = None,
  id: str = None,
  oci_console_sign_on_policy_consent_count: typing.Union[int, float] = None,
  oci_console_sign_on_policy_consent_filter: str = None,
  resource_type_schema_version: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.ociConsoleSignOnPolicyConsentCount">oci_console_sign_on_policy_consent_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#oci_console_sign_on_policy_consent_count DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#oci_console_sign_on_policy_consent_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.ociConsoleSignOnPolicyConsentFilter">oci_console_sign_on_policy_consent_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#oci_console_sign_on_policy_consent_filter DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#oci_console_sign_on_policy_consent_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#start_index DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#authorization}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#filter DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oci_console_sign_on_policy_consent_count`<sup>Optional</sup> <a name="oci_console_sign_on_policy_consent_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.ociConsoleSignOnPolicyConsentCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#oci_console_sign_on_policy_consent_count DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#oci_console_sign_on_policy_consent_count}.

---

##### `oci_console_sign_on_policy_consent_filter`<sup>Optional</sup> <a name="oci_console_sign_on_policy_consent_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.ociConsoleSignOnPolicyConsentFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#oci_console_sign_on_policy_consent_filter DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#oci_console_sign_on_policy_consent_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#resource_type_schema_version}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#start_index DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetOciConsoleSignOnPolicyConsentCount">reset_oci_console_sign_on_policy_consent_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetOciConsoleSignOnPolicyConsentFilter">reset_oci_console_sign_on_policy_consent_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter</a>]]

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_oci_console_sign_on_policy_consent_count` <a name="reset_oci_console_sign_on_policy_consent_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetOciConsoleSignOnPolicyConsentCount"></a>

```python
def reset_oci_console_sign_on_policy_consent_count() -> None
```

##### `reset_oci_console_sign_on_policy_consent_filter` <a name="reset_oci_console_sign_on_policy_consent_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetOciConsoleSignOnPolicyConsentFilter"></a>

```python
def reset_oci_console_sign_on_policy_consent_filter() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsOciConsoleSignOnPolicyConsents resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsOciConsoleSignOnPolicyConsents resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsOciConsoleSignOnPolicyConsents to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsOciConsoleSignOnPolicyConsents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsOciConsoleSignOnPolicyConsents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentCountInput">oci_console_sign_on_policy_consent_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentFilterInput">oci_console_sign_on_policy_consent_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentCount">oci_console_sign_on_policy_consent_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentFilter">oci_console_sign_on_policy_consent_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.filter"></a>

```python
filter: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList</a>

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.resources"></a>

```python
resources: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.tags"></a>

```python
tags: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList</a>

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter</a>]]

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `oci_console_sign_on_policy_consent_count_input`<sup>Optional</sup> <a name="oci_console_sign_on_policy_consent_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentCountInput"></a>

```python
oci_console_sign_on_policy_consent_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oci_console_sign_on_policy_consent_filter_input`<sup>Optional</sup> <a name="oci_console_sign_on_policy_consent_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentFilterInput"></a>

```python
oci_console_sign_on_policy_consent_filter_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `oci_console_sign_on_policy_consent_count`<sup>Required</sup> <a name="oci_console_sign_on_policy_consent_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentCount"></a>

```python
oci_console_sign_on_policy_consent_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oci_console_sign_on_policy_consent_filter`<sup>Required</sup> <a name="oci_console_sign_on_policy_consent_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentFilter"></a>

```python
oci_console_sign_on_policy_consent_filter: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter]] = None,
  id: str = None,
  oci_console_sign_on_policy_consent_count: typing.Union[int, float] = None,
  oci_console_sign_on_policy_consent_filter: str = None,
  resource_type_schema_version: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.ociConsoleSignOnPolicyConsentCount">oci_console_sign_on_policy_consent_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#oci_console_sign_on_policy_consent_count DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#oci_console_sign_on_policy_consent_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.ociConsoleSignOnPolicyConsentFilter">oci_console_sign_on_policy_consent_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#oci_console_sign_on_policy_consent_filter DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#oci_console_sign_on_policy_consent_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#start_index DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#authorization}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#filter DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oci_console_sign_on_policy_consent_count`<sup>Optional</sup> <a name="oci_console_sign_on_policy_consent_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.ociConsoleSignOnPolicyConsentCount"></a>

```python
oci_console_sign_on_policy_consent_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#oci_console_sign_on_policy_consent_count DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#oci_console_sign_on_policy_consent_count}.

---

##### `oci_console_sign_on_policy_consent_filter`<sup>Optional</sup> <a name="oci_console_sign_on_policy_consent_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.ociConsoleSignOnPolicyConsentFilter"></a>

```python
oci_console_sign_on_policy_consent_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#oci_console_sign_on_policy_consent_filter DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#oci_console_sign_on_policy_consent_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#resource_type_schema_version}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#start_index DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#start_index}.

---

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#name DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#values DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#regex DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#name DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#values DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#regex DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#regex}.

---

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources()
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy()
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy()
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy()
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta()
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource()
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource()
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter</a>]]

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter</a>]

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.changeType">change_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.clientIp">client_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.consentSignedBy">consent_signed_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.justification">justification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.modifiedResource">modified_resource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.notificationRecipients">notification_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.policyResource">policy_resource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.timeConsentSigned">time_consent_signed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_type`<sup>Required</sup> <a name="change_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.changeType"></a>

```python
change_type: str
```

- *Type:* str

---

##### `client_ip`<sup>Required</sup> <a name="client_ip" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.clientIp"></a>

```python
client_ip: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `consent_signed_by`<sup>Required</sup> <a name="consent_signed_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.consentSignedBy"></a>

```python
consent_signed_by: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList</a>

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `justification`<sup>Required</sup> <a name="justification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.justification"></a>

```python
justification: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList</a>

---

##### `modified_resource`<sup>Required</sup> <a name="modified_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.modifiedResource"></a>

```python
modified_resource: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList</a>

---

##### `notification_recipients`<sup>Required</sup> <a name="notification_recipients" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.notificationRecipients"></a>

```python
notification_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `policy_resource`<sup>Required</sup> <a name="policy_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.policyResource"></a>

```python
policy_resource: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList</a>

---

##### `reason`<sup>Required</sup> <a name="reason" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `time_consent_signed`<sup>Required</sup> <a name="time_consent_signed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.timeConsentSigned"></a>

```python
time_consent_signed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consents

dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags</a>

---




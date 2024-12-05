# `opsiDatabaseInsight` Submodule <a name="`opsiDatabaseInsight` Submodule" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiDatabaseInsight <a name="OpsiDatabaseInsight" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight oci_opsi_database_insight}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsight(
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
  entity_source: str,
  connection_credential_details: OpsiDatabaseInsightConnectionCredentialDetails = None,
  connection_details: OpsiDatabaseInsightConnectionDetails = None,
  connector_id: str = None,
  credential_details: OpsiDatabaseInsightCredentialDetails = None,
  database_connection_status_details: str = None,
  database_id: str = None,
  database_resource_type: str = None,
  dbm_private_endpoint_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  deployment_type: str = None,
  enterprise_manager_bridge_id: str = None,
  enterprise_manager_entity_identifier: str = None,
  enterprise_manager_identifier: str = None,
  exadata_insight_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_advanced_features_enabled: typing.Union[bool, IResolvable] = None,
  management_agent_id: str = None,
  opsi_private_endpoint_id: str = None,
  service_name: str = None,
  status: str = None,
  timeouts: OpsiDatabaseInsightTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#compartment_id OpsiDatabaseInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.entitySource">entity_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#entity_source OpsiDatabaseInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connectionCredentialDetails">connection_credential_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | connection_credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connectionDetails">connection_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | connection_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connectorId">connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connector_id OpsiDatabaseInsight#connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.credentialDetails">credential_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.databaseConnectionStatusDetails">database_connection_status_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_connection_status_details OpsiDatabaseInsight#database_connection_status_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_id OpsiDatabaseInsight#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.databaseResourceType">database_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_resource_type OpsiDatabaseInsight#database_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.dbmPrivateEndpointId">dbm_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#dbm_private_endpoint_id OpsiDatabaseInsight#dbm_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#defined_tags OpsiDatabaseInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.deploymentType">deployment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#deployment_type OpsiDatabaseInsight#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.enterpriseManagerBridgeId">enterprise_manager_bridge_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_bridge_id OpsiDatabaseInsight#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.enterpriseManagerEntityIdentifier">enterprise_manager_entity_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_entity_identifier OpsiDatabaseInsight#enterprise_manager_entity_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.enterpriseManagerIdentifier">enterprise_manager_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_identifier OpsiDatabaseInsight#enterprise_manager_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.exadataInsightId">exadata_insight_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#exadata_insight_id OpsiDatabaseInsight#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#freeform_tags OpsiDatabaseInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#id OpsiDatabaseInsight#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.isAdvancedFeaturesEnabled">is_advanced_features_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#is_advanced_features_enabled OpsiDatabaseInsight#is_advanced_features_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#management_agent_id OpsiDatabaseInsight#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.opsiPrivateEndpointId">opsi_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#opsi_private_endpoint_id OpsiDatabaseInsight#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#status OpsiDatabaseInsight#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#compartment_id OpsiDatabaseInsight#compartment_id}.

---

##### `entity_source`<sup>Required</sup> <a name="entity_source" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.entitySource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#entity_source OpsiDatabaseInsight#entity_source}.

---

##### `connection_credential_details`<sup>Optional</sup> <a name="connection_credential_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connectionCredentialDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

connection_credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connection_credential_details OpsiDatabaseInsight#connection_credential_details}

---

##### `connection_details`<sup>Optional</sup> <a name="connection_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connectionDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

connection_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connection_details OpsiDatabaseInsight#connection_details}

---

##### `connector_id`<sup>Optional</sup> <a name="connector_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connector_id OpsiDatabaseInsight#connector_id}.

---

##### `credential_details`<sup>Optional</sup> <a name="credential_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.credentialDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_details OpsiDatabaseInsight#credential_details}

---

##### `database_connection_status_details`<sup>Optional</sup> <a name="database_connection_status_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.databaseConnectionStatusDetails"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_connection_status_details OpsiDatabaseInsight#database_connection_status_details}.

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_id OpsiDatabaseInsight#database_id}.

---

##### `database_resource_type`<sup>Optional</sup> <a name="database_resource_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.databaseResourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_resource_type OpsiDatabaseInsight#database_resource_type}.

---

##### `dbm_private_endpoint_id`<sup>Optional</sup> <a name="dbm_private_endpoint_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.dbmPrivateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#dbm_private_endpoint_id OpsiDatabaseInsight#dbm_private_endpoint_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#defined_tags OpsiDatabaseInsight#defined_tags}.

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.deploymentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#deployment_type OpsiDatabaseInsight#deployment_type}.

---

##### `enterprise_manager_bridge_id`<sup>Optional</sup> <a name="enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.enterpriseManagerBridgeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_bridge_id OpsiDatabaseInsight#enterprise_manager_bridge_id}.

---

##### `enterprise_manager_entity_identifier`<sup>Optional</sup> <a name="enterprise_manager_entity_identifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.enterpriseManagerEntityIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_entity_identifier OpsiDatabaseInsight#enterprise_manager_entity_identifier}.

---

##### `enterprise_manager_identifier`<sup>Optional</sup> <a name="enterprise_manager_identifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.enterpriseManagerIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_identifier OpsiDatabaseInsight#enterprise_manager_identifier}.

---

##### `exadata_insight_id`<sup>Optional</sup> <a name="exadata_insight_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.exadataInsightId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#exadata_insight_id OpsiDatabaseInsight#exadata_insight_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#freeform_tags OpsiDatabaseInsight#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#id OpsiDatabaseInsight#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_advanced_features_enabled`<sup>Optional</sup> <a name="is_advanced_features_enabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.isAdvancedFeaturesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#is_advanced_features_enabled OpsiDatabaseInsight#is_advanced_features_enabled}.

---

##### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.managementAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#management_agent_id OpsiDatabaseInsight#management_agent_id}.

---

##### `opsi_private_endpoint_id`<sup>Optional</sup> <a name="opsi_private_endpoint_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.opsiPrivateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#opsi_private_endpoint_id OpsiDatabaseInsight#opsi_private_endpoint_id}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#status OpsiDatabaseInsight#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#timeouts OpsiDatabaseInsight#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails">put_connection_credential_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails">put_connection_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails">put_credential_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionCredentialDetails">reset_connection_credential_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionDetails">reset_connection_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectorId">reset_connector_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetCredentialDetails">reset_credential_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseConnectionStatusDetails">reset_database_connection_status_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseId">reset_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseResourceType">reset_database_resource_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDbmPrivateEndpointId">reset_dbm_private_endpoint_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDeploymentType">reset_deployment_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerBridgeId">reset_enterprise_manager_bridge_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerEntityIdentifier">reset_enterprise_manager_entity_identifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerIdentifier">reset_enterprise_manager_identifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetExadataInsightId">reset_exadata_insight_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetIsAdvancedFeaturesEnabled">reset_is_advanced_features_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetManagementAgentId">reset_management_agent_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOpsiPrivateEndpointId">reset_opsi_private_endpoint_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connection_credential_details` <a name="put_connection_credential_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails"></a>

```python
def put_connection_credential_details(
  credential_type: str,
  credential_source_name: str = None,
  password_secret_id: str = None,
  role: str = None,
  user_name: str = None
) -> None
```

###### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails.parameter.credentialType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}.

---

###### `credential_source_name`<sup>Optional</sup> <a name="credential_source_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails.parameter.credentialSourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}.

---

###### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails.parameter.passwordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}.

---

###### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}.

---

###### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}.

---

##### `put_connection_details` <a name="put_connection_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails"></a>

```python
def put_connection_details(
  host_name: str = None,
  hosts: typing.Union[IResolvable, typing.List[OpsiDatabaseInsightConnectionDetailsHosts]] = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  service_name: str = None
) -> None
```

###### `host_name`<sup>Optional</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails.parameter.hostName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_name OpsiDatabaseInsight#host_name}.

---

###### `hosts`<sup>Optional</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails.parameter.hosts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>]]

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#hosts OpsiDatabaseInsight#hosts}

---

###### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#protocol OpsiDatabaseInsight#protocol}.

---

###### `service_name`<sup>Optional</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}.

---

##### `put_credential_details` <a name="put_credential_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails"></a>

```python
def put_credential_details(
  credential_type: str,
  credential_source_name: str = None,
  password_secret_id: str = None,
  role: str = None,
  user_name: str = None,
  wallet_secret_id: str = None
) -> None
```

###### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails.parameter.credentialType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}.

---

###### `credential_source_name`<sup>Optional</sup> <a name="credential_source_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails.parameter.credentialSourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}.

---

###### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails.parameter.passwordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}.

---

###### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}.

---

###### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}.

---

###### `wallet_secret_id`<sup>Optional</sup> <a name="wallet_secret_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails.parameter.walletSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#wallet_secret_id OpsiDatabaseInsight#wallet_secret_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#create OpsiDatabaseInsight#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#delete OpsiDatabaseInsight#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#update OpsiDatabaseInsight#update}.

---

##### `reset_connection_credential_details` <a name="reset_connection_credential_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionCredentialDetails"></a>

```python
def reset_connection_credential_details() -> None
```

##### `reset_connection_details` <a name="reset_connection_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionDetails"></a>

```python
def reset_connection_details() -> None
```

##### `reset_connector_id` <a name="reset_connector_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectorId"></a>

```python
def reset_connector_id() -> None
```

##### `reset_credential_details` <a name="reset_credential_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetCredentialDetails"></a>

```python
def reset_credential_details() -> None
```

##### `reset_database_connection_status_details` <a name="reset_database_connection_status_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseConnectionStatusDetails"></a>

```python
def reset_database_connection_status_details() -> None
```

##### `reset_database_id` <a name="reset_database_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseId"></a>

```python
def reset_database_id() -> None
```

##### `reset_database_resource_type` <a name="reset_database_resource_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseResourceType"></a>

```python
def reset_database_resource_type() -> None
```

##### `reset_dbm_private_endpoint_id` <a name="reset_dbm_private_endpoint_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDbmPrivateEndpointId"></a>

```python
def reset_dbm_private_endpoint_id() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_deployment_type` <a name="reset_deployment_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDeploymentType"></a>

```python
def reset_deployment_type() -> None
```

##### `reset_enterprise_manager_bridge_id` <a name="reset_enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerBridgeId"></a>

```python
def reset_enterprise_manager_bridge_id() -> None
```

##### `reset_enterprise_manager_entity_identifier` <a name="reset_enterprise_manager_entity_identifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerEntityIdentifier"></a>

```python
def reset_enterprise_manager_entity_identifier() -> None
```

##### `reset_enterprise_manager_identifier` <a name="reset_enterprise_manager_identifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerIdentifier"></a>

```python
def reset_enterprise_manager_identifier() -> None
```

##### `reset_exadata_insight_id` <a name="reset_exadata_insight_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetExadataInsightId"></a>

```python
def reset_exadata_insight_id() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_advanced_features_enabled` <a name="reset_is_advanced_features_enabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetIsAdvancedFeaturesEnabled"></a>

```python
def reset_is_advanced_features_enabled() -> None
```

##### `reset_management_agent_id` <a name="reset_management_agent_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetManagementAgentId"></a>

```python
def reset_management_agent_id() -> None
```

##### `reset_opsi_private_endpoint_id` <a name="reset_opsi_private_endpoint_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOpsiPrivateEndpointId"></a>

```python
def reset_opsi_private_endpoint_id() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OpsiDatabaseInsight resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsight.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsight.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsight.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsight.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OpsiDatabaseInsight resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpsiDatabaseInsight to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpsiDatabaseInsight that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsiDatabaseInsight to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetails">connection_credential_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference">OpsiDatabaseInsightConnectionCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetails">connection_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference">OpsiDatabaseInsightConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetails">credential_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference">OpsiDatabaseInsightCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseDisplayName">database_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityDisplayName">enterprise_manager_entity_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityName">enterprise_manager_entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityType">enterprise_manager_entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHeatWaveClusterAttached">is_heat_wave_cluster_attached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHighlyAvailable">is_highly_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.processorCount">processor_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.rootId">root_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference">OpsiDatabaseInsightTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetailsInput">connection_credential_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetailsInput">connection_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorIdInput">connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetailsInput">credential_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetailsInput">database_connection_status_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceTypeInput">database_resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointIdInput">dbm_private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentTypeInput">deployment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeIdInput">enterprise_manager_bridge_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifierInput">enterprise_manager_entity_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifierInput">enterprise_manager_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySourceInput">entity_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightIdInput">exadata_insight_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabledInput">is_advanced_features_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentIdInput">management_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointIdInput">opsi_private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetails">database_connection_status_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceType">database_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointId">dbm_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeId">enterprise_manager_bridge_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifier">enterprise_manager_entity_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifier">enterprise_manager_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySource">entity_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightId">exadata_insight_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabled">is_advanced_features_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointId">opsi_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_credential_details`<sup>Required</sup> <a name="connection_credential_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetails"></a>

```python
connection_credential_details: OpsiDatabaseInsightConnectionCredentialDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference">OpsiDatabaseInsightConnectionCredentialDetailsOutputReference</a>

---

##### `connection_details`<sup>Required</sup> <a name="connection_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetails"></a>

```python
connection_details: OpsiDatabaseInsightConnectionDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference">OpsiDatabaseInsightConnectionDetailsOutputReference</a>

---

##### `credential_details`<sup>Required</sup> <a name="credential_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetails"></a>

```python
credential_details: OpsiDatabaseInsightCredentialDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference">OpsiDatabaseInsightCredentialDetailsOutputReference</a>

---

##### `database_display_name`<sup>Required</sup> <a name="database_display_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseDisplayName"></a>

```python
database_display_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `enterprise_manager_entity_display_name`<sup>Required</sup> <a name="enterprise_manager_entity_display_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityDisplayName"></a>

```python
enterprise_manager_entity_display_name: str
```

- *Type:* str

---

##### `enterprise_manager_entity_name`<sup>Required</sup> <a name="enterprise_manager_entity_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityName"></a>

```python
enterprise_manager_entity_name: str
```

- *Type:* str

---

##### `enterprise_manager_entity_type`<sup>Required</sup> <a name="enterprise_manager_entity_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityType"></a>

```python
enterprise_manager_entity_type: str
```

- *Type:* str

---

##### `is_heat_wave_cluster_attached`<sup>Required</sup> <a name="is_heat_wave_cluster_attached" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHeatWaveClusterAttached"></a>

```python
is_heat_wave_cluster_attached: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_highly_available`<sup>Required</sup> <a name="is_highly_available" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHighlyAvailable"></a>

```python
is_highly_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `processor_count`<sup>Required</sup> <a name="processor_count" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.processorCount"></a>

```python
processor_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_id`<sup>Required</sup> <a name="root_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.rootId"></a>

```python
root_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeouts"></a>

```python
timeouts: OpsiDatabaseInsightTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference">OpsiDatabaseInsightTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `connection_credential_details_input`<sup>Optional</sup> <a name="connection_credential_details_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetailsInput"></a>

```python
connection_credential_details_input: OpsiDatabaseInsightConnectionCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

---

##### `connection_details_input`<sup>Optional</sup> <a name="connection_details_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetailsInput"></a>

```python
connection_details_input: OpsiDatabaseInsightConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

---

##### `connector_id_input`<sup>Optional</sup> <a name="connector_id_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorIdInput"></a>

```python
connector_id_input: str
```

- *Type:* str

---

##### `credential_details_input`<sup>Optional</sup> <a name="credential_details_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetailsInput"></a>

```python
credential_details_input: OpsiDatabaseInsightCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

---

##### `database_connection_status_details_input`<sup>Optional</sup> <a name="database_connection_status_details_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetailsInput"></a>

```python
database_connection_status_details_input: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `database_resource_type_input`<sup>Optional</sup> <a name="database_resource_type_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceTypeInput"></a>

```python
database_resource_type_input: str
```

- *Type:* str

---

##### `dbm_private_endpoint_id_input`<sup>Optional</sup> <a name="dbm_private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointIdInput"></a>

```python
dbm_private_endpoint_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deployment_type_input`<sup>Optional</sup> <a name="deployment_type_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentTypeInput"></a>

```python
deployment_type_input: str
```

- *Type:* str

---

##### `enterprise_manager_bridge_id_input`<sup>Optional</sup> <a name="enterprise_manager_bridge_id_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeIdInput"></a>

```python
enterprise_manager_bridge_id_input: str
```

- *Type:* str

---

##### `enterprise_manager_entity_identifier_input`<sup>Optional</sup> <a name="enterprise_manager_entity_identifier_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifierInput"></a>

```python
enterprise_manager_entity_identifier_input: str
```

- *Type:* str

---

##### `enterprise_manager_identifier_input`<sup>Optional</sup> <a name="enterprise_manager_identifier_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifierInput"></a>

```python
enterprise_manager_identifier_input: str
```

- *Type:* str

---

##### `entity_source_input`<sup>Optional</sup> <a name="entity_source_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySourceInput"></a>

```python
entity_source_input: str
```

- *Type:* str

---

##### `exadata_insight_id_input`<sup>Optional</sup> <a name="exadata_insight_id_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightIdInput"></a>

```python
exadata_insight_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_advanced_features_enabled_input`<sup>Optional</sup> <a name="is_advanced_features_enabled_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabledInput"></a>

```python
is_advanced_features_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `management_agent_id_input`<sup>Optional</sup> <a name="management_agent_id_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentIdInput"></a>

```python
management_agent_id_input: str
```

- *Type:* str

---

##### `opsi_private_endpoint_id_input`<sup>Optional</sup> <a name="opsi_private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointIdInput"></a>

```python
opsi_private_endpoint_id_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OpsiDatabaseInsightTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `database_connection_status_details`<sup>Required</sup> <a name="database_connection_status_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetails"></a>

```python
database_connection_status_details: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `database_resource_type`<sup>Required</sup> <a name="database_resource_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceType"></a>

```python
database_resource_type: str
```

- *Type:* str

---

##### `dbm_private_endpoint_id`<sup>Required</sup> <a name="dbm_private_endpoint_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointId"></a>

```python
dbm_private_endpoint_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `enterprise_manager_bridge_id`<sup>Required</sup> <a name="enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeId"></a>

```python
enterprise_manager_bridge_id: str
```

- *Type:* str

---

##### `enterprise_manager_entity_identifier`<sup>Required</sup> <a name="enterprise_manager_entity_identifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifier"></a>

```python
enterprise_manager_entity_identifier: str
```

- *Type:* str

---

##### `enterprise_manager_identifier`<sup>Required</sup> <a name="enterprise_manager_identifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifier"></a>

```python
enterprise_manager_identifier: str
```

- *Type:* str

---

##### `entity_source`<sup>Required</sup> <a name="entity_source" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySource"></a>

```python
entity_source: str
```

- *Type:* str

---

##### `exadata_insight_id`<sup>Required</sup> <a name="exadata_insight_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightId"></a>

```python
exadata_insight_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_advanced_features_enabled`<sup>Required</sup> <a name="is_advanced_features_enabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabled"></a>

```python
is_advanced_features_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `opsi_private_endpoint_id`<sup>Required</sup> <a name="opsi_private_endpoint_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointId"></a>

```python
opsi_private_endpoint_id: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiDatabaseInsightConfig <a name="OpsiDatabaseInsightConfig" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsightConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  entity_source: str,
  connection_credential_details: OpsiDatabaseInsightConnectionCredentialDetails = None,
  connection_details: OpsiDatabaseInsightConnectionDetails = None,
  connector_id: str = None,
  credential_details: OpsiDatabaseInsightCredentialDetails = None,
  database_connection_status_details: str = None,
  database_id: str = None,
  database_resource_type: str = None,
  dbm_private_endpoint_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  deployment_type: str = None,
  enterprise_manager_bridge_id: str = None,
  enterprise_manager_entity_identifier: str = None,
  enterprise_manager_identifier: str = None,
  exadata_insight_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_advanced_features_enabled: typing.Union[bool, IResolvable] = None,
  management_agent_id: str = None,
  opsi_private_endpoint_id: str = None,
  service_name: str = None,
  status: str = None,
  timeouts: OpsiDatabaseInsightTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#compartment_id OpsiDatabaseInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.entitySource">entity_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#entity_source OpsiDatabaseInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionCredentialDetails">connection_credential_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | connection_credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionDetails">connection_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | connection_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectorId">connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connector_id OpsiDatabaseInsight#connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.credentialDetails">credential_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseConnectionStatusDetails">database_connection_status_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_connection_status_details OpsiDatabaseInsight#database_connection_status_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_id OpsiDatabaseInsight#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseResourceType">database_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_resource_type OpsiDatabaseInsight#database_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dbmPrivateEndpointId">dbm_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#dbm_private_endpoint_id OpsiDatabaseInsight#dbm_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#defined_tags OpsiDatabaseInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.deploymentType">deployment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#deployment_type OpsiDatabaseInsight#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerBridgeId">enterprise_manager_bridge_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_bridge_id OpsiDatabaseInsight#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerEntityIdentifier">enterprise_manager_entity_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_entity_identifier OpsiDatabaseInsight#enterprise_manager_entity_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerIdentifier">enterprise_manager_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_identifier OpsiDatabaseInsight#enterprise_manager_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.exadataInsightId">exadata_insight_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#exadata_insight_id OpsiDatabaseInsight#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#freeform_tags OpsiDatabaseInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#id OpsiDatabaseInsight#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.isAdvancedFeaturesEnabled">is_advanced_features_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#is_advanced_features_enabled OpsiDatabaseInsight#is_advanced_features_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#management_agent_id OpsiDatabaseInsight#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.opsiPrivateEndpointId">opsi_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#opsi_private_endpoint_id OpsiDatabaseInsight#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#status OpsiDatabaseInsight#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#compartment_id OpsiDatabaseInsight#compartment_id}.

---

##### `entity_source`<sup>Required</sup> <a name="entity_source" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.entitySource"></a>

```python
entity_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#entity_source OpsiDatabaseInsight#entity_source}.

---

##### `connection_credential_details`<sup>Optional</sup> <a name="connection_credential_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionCredentialDetails"></a>

```python
connection_credential_details: OpsiDatabaseInsightConnectionCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

connection_credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connection_credential_details OpsiDatabaseInsight#connection_credential_details}

---

##### `connection_details`<sup>Optional</sup> <a name="connection_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionDetails"></a>

```python
connection_details: OpsiDatabaseInsightConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

connection_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connection_details OpsiDatabaseInsight#connection_details}

---

##### `connector_id`<sup>Optional</sup> <a name="connector_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connector_id OpsiDatabaseInsight#connector_id}.

---

##### `credential_details`<sup>Optional</sup> <a name="credential_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.credentialDetails"></a>

```python
credential_details: OpsiDatabaseInsightCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_details OpsiDatabaseInsight#credential_details}

---

##### `database_connection_status_details`<sup>Optional</sup> <a name="database_connection_status_details" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseConnectionStatusDetails"></a>

```python
database_connection_status_details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_connection_status_details OpsiDatabaseInsight#database_connection_status_details}.

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_id OpsiDatabaseInsight#database_id}.

---

##### `database_resource_type`<sup>Optional</sup> <a name="database_resource_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseResourceType"></a>

```python
database_resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_resource_type OpsiDatabaseInsight#database_resource_type}.

---

##### `dbm_private_endpoint_id`<sup>Optional</sup> <a name="dbm_private_endpoint_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dbmPrivateEndpointId"></a>

```python
dbm_private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#dbm_private_endpoint_id OpsiDatabaseInsight#dbm_private_endpoint_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#defined_tags OpsiDatabaseInsight#defined_tags}.

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#deployment_type OpsiDatabaseInsight#deployment_type}.

---

##### `enterprise_manager_bridge_id`<sup>Optional</sup> <a name="enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerBridgeId"></a>

```python
enterprise_manager_bridge_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_bridge_id OpsiDatabaseInsight#enterprise_manager_bridge_id}.

---

##### `enterprise_manager_entity_identifier`<sup>Optional</sup> <a name="enterprise_manager_entity_identifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerEntityIdentifier"></a>

```python
enterprise_manager_entity_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_entity_identifier OpsiDatabaseInsight#enterprise_manager_entity_identifier}.

---

##### `enterprise_manager_identifier`<sup>Optional</sup> <a name="enterprise_manager_identifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerIdentifier"></a>

```python
enterprise_manager_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_identifier OpsiDatabaseInsight#enterprise_manager_identifier}.

---

##### `exadata_insight_id`<sup>Optional</sup> <a name="exadata_insight_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.exadataInsightId"></a>

```python
exadata_insight_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#exadata_insight_id OpsiDatabaseInsight#exadata_insight_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#freeform_tags OpsiDatabaseInsight#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#id OpsiDatabaseInsight#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_advanced_features_enabled`<sup>Optional</sup> <a name="is_advanced_features_enabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.isAdvancedFeaturesEnabled"></a>

```python
is_advanced_features_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#is_advanced_features_enabled OpsiDatabaseInsight#is_advanced_features_enabled}.

---

##### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#management_agent_id OpsiDatabaseInsight#management_agent_id}.

---

##### `opsi_private_endpoint_id`<sup>Optional</sup> <a name="opsi_private_endpoint_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.opsiPrivateEndpointId"></a>

```python
opsi_private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#opsi_private_endpoint_id OpsiDatabaseInsight#opsi_private_endpoint_id}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#status OpsiDatabaseInsight#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.timeouts"></a>

```python
timeouts: OpsiDatabaseInsightTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#timeouts OpsiDatabaseInsight#timeouts}

---

### OpsiDatabaseInsightConnectionCredentialDetails <a name="OpsiDatabaseInsightConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails(
  credential_type: str,
  credential_source_name: str = None,
  password_secret_id: str = None,
  role: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialType">credential_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialSourceName">credential_source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}. |

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}.

---

##### `credential_source_name`<sup>Optional</sup> <a name="credential_source_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialSourceName"></a>

```python
credential_source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}.

---

##### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}.

---

### OpsiDatabaseInsightConnectionDetails <a name="OpsiDatabaseInsightConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails(
  host_name: str = None,
  hosts: typing.Union[IResolvable, typing.List[OpsiDatabaseInsightConnectionDetailsHosts]] = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_name OpsiDatabaseInsight#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hosts">hosts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>]]</code> | hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#protocol OpsiDatabaseInsight#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}. |

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_name OpsiDatabaseInsight#host_name}.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hosts"></a>

```python
hosts: typing.Union[IResolvable, typing.List[OpsiDatabaseInsightConnectionDetailsHosts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>]]

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#hosts OpsiDatabaseInsight#hosts}

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#protocol OpsiDatabaseInsight#protocol}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}.

---

### OpsiDatabaseInsightConnectionDetailsHosts <a name="OpsiDatabaseInsightConnectionDetailsHosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts(
  host_ip: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.hostIp">host_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_ip OpsiDatabaseInsight#host_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}. |

---

##### `host_ip`<sup>Optional</sup> <a name="host_ip" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.hostIp"></a>

```python
host_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_ip OpsiDatabaseInsight#host_ip}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}.

---

### OpsiDatabaseInsightCredentialDetails <a name="OpsiDatabaseInsightCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails(
  credential_type: str,
  credential_source_name: str = None,
  password_secret_id: str = None,
  role: str = None,
  user_name: str = None,
  wallet_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialType">credential_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialSourceName">credential_source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.walletSecretId">wallet_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#wallet_secret_id OpsiDatabaseInsight#wallet_secret_id}. |

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}.

---

##### `credential_source_name`<sup>Optional</sup> <a name="credential_source_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialSourceName"></a>

```python
credential_source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}.

---

##### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}.

---

##### `wallet_secret_id`<sup>Optional</sup> <a name="wallet_secret_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.walletSecretId"></a>

```python
wallet_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#wallet_secret_id OpsiDatabaseInsight#wallet_secret_id}.

---

### OpsiDatabaseInsightTimeouts <a name="OpsiDatabaseInsightTimeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsightTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#create OpsiDatabaseInsight#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#delete OpsiDatabaseInsight#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#update OpsiDatabaseInsight#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#create OpsiDatabaseInsight#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#delete OpsiDatabaseInsight#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#update OpsiDatabaseInsight#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiDatabaseInsightConnectionCredentialDetailsOutputReference <a name="OpsiDatabaseInsightConnectionCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetCredentialSourceName">reset_credential_source_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetPasswordSecretId">reset_password_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_source_name` <a name="reset_credential_source_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetCredentialSourceName"></a>

```python
def reset_credential_source_name() -> None
```

##### `reset_password_secret_id` <a name="reset_password_secret_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetPasswordSecretId"></a>

```python
def reset_password_secret_id() -> None
```

##### `reset_role` <a name="reset_role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceNameInput">credential_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialTypeInput">credential_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretIdInput">password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceName">credential_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_source_name_input`<sup>Optional</sup> <a name="credential_source_name_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceNameInput"></a>

```python
credential_source_name_input: str
```

- *Type:* str

---

##### `credential_type_input`<sup>Optional</sup> <a name="credential_type_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialTypeInput"></a>

```python
credential_type_input: str
```

- *Type:* str

---

##### `password_secret_id_input`<sup>Optional</sup> <a name="password_secret_id_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```python
password_secret_id_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `credential_source_name`<sup>Required</sup> <a name="credential_source_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceName"></a>

```python
credential_source_name: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OpsiDatabaseInsightConnectionCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

---


### OpsiDatabaseInsightConnectionDetailsHostsList <a name="OpsiDatabaseInsightConnectionDetailsHostsList" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsiDatabaseInsightConnectionDetailsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsiDatabaseInsightConnectionDetailsHosts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>]]

---


### OpsiDatabaseInsightConnectionDetailsHostsOutputReference <a name="OpsiDatabaseInsightConnectionDetailsHostsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetHostIp">reset_host_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host_ip` <a name="reset_host_ip" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetHostIp"></a>

```python
def reset_host_ip() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIpInput">host_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIp">host_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_ip_input`<sup>Optional</sup> <a name="host_ip_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIpInput"></a>

```python
host_ip_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_ip`<sup>Required</sup> <a name="host_ip" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIp"></a>

```python
host_ip: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OpsiDatabaseInsightConnectionDetailsHosts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>]

---


### OpsiDatabaseInsightConnectionDetailsOutputReference <a name="OpsiDatabaseInsightConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.putHosts">put_hosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHostName">reset_host_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHosts">reset_hosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hosts` <a name="put_hosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.putHosts"></a>

```python
def put_hosts(
  value: typing.Union[IResolvable, typing.List[OpsiDatabaseInsightConnectionDetailsHosts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.putHosts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>]]

---

##### `reset_host_name` <a name="reset_host_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHostName"></a>

```python
def reset_host_name() -> None
```

##### `reset_hosts` <a name="reset_hosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHosts"></a>

```python
def reset_hosts() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hosts">hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList">OpsiDatabaseInsightConnectionDetailsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostsInput">hosts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hosts"></a>

```python
hosts: OpsiDatabaseInsightConnectionDetailsHostsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList">OpsiDatabaseInsightConnectionDetailsHostsList</a>

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostsInput"></a>

```python
hosts_input: typing.Union[IResolvable, typing.List[OpsiDatabaseInsightConnectionDetailsHosts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>]]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OpsiDatabaseInsightConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

---


### OpsiDatabaseInsightCredentialDetailsOutputReference <a name="OpsiDatabaseInsightCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetCredentialSourceName">reset_credential_source_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetPasswordSecretId">reset_password_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetWalletSecretId">reset_wallet_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_source_name` <a name="reset_credential_source_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetCredentialSourceName"></a>

```python
def reset_credential_source_name() -> None
```

##### `reset_password_secret_id` <a name="reset_password_secret_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetPasswordSecretId"></a>

```python
def reset_password_secret_id() -> None
```

##### `reset_role` <a name="reset_role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```

##### `reset_wallet_secret_id` <a name="reset_wallet_secret_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetWalletSecretId"></a>

```python
def reset_wallet_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceNameInput">credential_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialTypeInput">credential_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretIdInput">password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretIdInput">wallet_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceName">credential_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretId">wallet_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_source_name_input`<sup>Optional</sup> <a name="credential_source_name_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceNameInput"></a>

```python
credential_source_name_input: str
```

- *Type:* str

---

##### `credential_type_input`<sup>Optional</sup> <a name="credential_type_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialTypeInput"></a>

```python
credential_type_input: str
```

- *Type:* str

---

##### `password_secret_id_input`<sup>Optional</sup> <a name="password_secret_id_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```python
password_secret_id_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `wallet_secret_id_input`<sup>Optional</sup> <a name="wallet_secret_id_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretIdInput"></a>

```python
wallet_secret_id_input: str
```

- *Type:* str

---

##### `credential_source_name`<sup>Required</sup> <a name="credential_source_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceName"></a>

```python
credential_source_name: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `wallet_secret_id`<sup>Required</sup> <a name="wallet_secret_id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretId"></a>

```python
wallet_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OpsiDatabaseInsightCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

---


### OpsiDatabaseInsightTimeoutsOutputReference <a name="OpsiDatabaseInsightTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_database_insight

opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OpsiDatabaseInsightTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>]

---




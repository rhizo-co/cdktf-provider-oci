# `opsiDatabaseInsight` Submodule <a name="`opsiDatabaseInsight` Submodule" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiDatabaseInsight <a name="OpsiDatabaseInsight" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight oci_opsi_database_insight}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsight;

OpsiDatabaseInsight.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .entitySource(java.lang.String)
//  .connectionCredentialDetails(OpsiDatabaseInsightConnectionCredentialDetails)
//  .connectionDetails(OpsiDatabaseInsightConnectionDetails)
//  .connectorId(java.lang.String)
//  .credentialDetails(OpsiDatabaseInsightCredentialDetails)
//  .databaseConnectionStatusDetails(java.lang.String)
//  .databaseId(java.lang.String)
//  .databaseResourceType(java.lang.String)
//  .dbmPrivateEndpointId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deploymentType(java.lang.String)
//  .enterpriseManagerBridgeId(java.lang.String)
//  .enterpriseManagerEntityIdentifier(java.lang.String)
//  .enterpriseManagerIdentifier(java.lang.String)
//  .exadataInsightId(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isAdvancedFeaturesEnabled(java.lang.Boolean)
//  .isAdvancedFeaturesEnabled(IResolvable)
//  .managementAgentId(java.lang.String)
//  .opsiPrivateEndpointId(java.lang.String)
//  .serviceName(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(OpsiDatabaseInsightTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#compartment_id OpsiDatabaseInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.entitySource">entitySource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#entity_source OpsiDatabaseInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connectionCredentialDetails">connectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | connection_credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connectionDetails">connectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | connection_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connectorId">connectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connector_id OpsiDatabaseInsight#connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.credentialDetails">credentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.databaseConnectionStatusDetails">databaseConnectionStatusDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_connection_status_details OpsiDatabaseInsight#database_connection_status_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_id OpsiDatabaseInsight#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.databaseResourceType">databaseResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_resource_type OpsiDatabaseInsight#database_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.dbmPrivateEndpointId">dbmPrivateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#dbm_private_endpoint_id OpsiDatabaseInsight#dbm_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#defined_tags OpsiDatabaseInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#deployment_type OpsiDatabaseInsight#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_bridge_id OpsiDatabaseInsight#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.enterpriseManagerEntityIdentifier">enterpriseManagerEntityIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_entity_identifier OpsiDatabaseInsight#enterprise_manager_entity_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.enterpriseManagerIdentifier">enterpriseManagerIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_identifier OpsiDatabaseInsight#enterprise_manager_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.exadataInsightId">exadataInsightId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#exadata_insight_id OpsiDatabaseInsight#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#freeform_tags OpsiDatabaseInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#id OpsiDatabaseInsight#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.isAdvancedFeaturesEnabled">isAdvancedFeaturesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#is_advanced_features_enabled OpsiDatabaseInsight#is_advanced_features_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#management_agent_id OpsiDatabaseInsight#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#opsi_private_endpoint_id OpsiDatabaseInsight#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#status OpsiDatabaseInsight#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#compartment_id OpsiDatabaseInsight#compartment_id}.

---

##### `entitySource`<sup>Required</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.entitySource"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#entity_source OpsiDatabaseInsight#entity_source}.

---

##### `connectionCredentialDetails`<sup>Optional</sup> <a name="connectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connectionCredentialDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

connection_credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connection_credential_details OpsiDatabaseInsight#connection_credential_details}

---

##### `connectionDetails`<sup>Optional</sup> <a name="connectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connectionDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

connection_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connection_details OpsiDatabaseInsight#connection_details}

---

##### `connectorId`<sup>Optional</sup> <a name="connectorId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.connectorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connector_id OpsiDatabaseInsight#connector_id}.

---

##### `credentialDetails`<sup>Optional</sup> <a name="credentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.credentialDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_details OpsiDatabaseInsight#credential_details}

---

##### `databaseConnectionStatusDetails`<sup>Optional</sup> <a name="databaseConnectionStatusDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.databaseConnectionStatusDetails"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_connection_status_details OpsiDatabaseInsight#database_connection_status_details}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.databaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_id OpsiDatabaseInsight#database_id}.

---

##### `databaseResourceType`<sup>Optional</sup> <a name="databaseResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.databaseResourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_resource_type OpsiDatabaseInsight#database_resource_type}.

---

##### `dbmPrivateEndpointId`<sup>Optional</sup> <a name="dbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.dbmPrivateEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#dbm_private_endpoint_id OpsiDatabaseInsight#dbm_private_endpoint_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#defined_tags OpsiDatabaseInsight#defined_tags}.

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.deploymentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#deployment_type OpsiDatabaseInsight#deployment_type}.

---

##### `enterpriseManagerBridgeId`<sup>Optional</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.enterpriseManagerBridgeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_bridge_id OpsiDatabaseInsight#enterprise_manager_bridge_id}.

---

##### `enterpriseManagerEntityIdentifier`<sup>Optional</sup> <a name="enterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.enterpriseManagerEntityIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_entity_identifier OpsiDatabaseInsight#enterprise_manager_entity_identifier}.

---

##### `enterpriseManagerIdentifier`<sup>Optional</sup> <a name="enterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.enterpriseManagerIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_identifier OpsiDatabaseInsight#enterprise_manager_identifier}.

---

##### `exadataInsightId`<sup>Optional</sup> <a name="exadataInsightId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.exadataInsightId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#exadata_insight_id OpsiDatabaseInsight#exadata_insight_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#freeform_tags OpsiDatabaseInsight#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#id OpsiDatabaseInsight#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAdvancedFeaturesEnabled`<sup>Optional</sup> <a name="isAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.isAdvancedFeaturesEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#is_advanced_features_enabled OpsiDatabaseInsight#is_advanced_features_enabled}.

---

##### `managementAgentId`<sup>Optional</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.managementAgentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#management_agent_id OpsiDatabaseInsight#management_agent_id}.

---

##### `opsiPrivateEndpointId`<sup>Optional</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.opsiPrivateEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#opsi_private_endpoint_id OpsiDatabaseInsight#opsi_private_endpoint_id}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.status"></a>

- *Type:* java.lang.String

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
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails">putConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails">putConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails">putCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionCredentialDetails">resetConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionDetails">resetConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectorId">resetConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetCredentialDetails">resetCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseConnectionStatusDetails">resetDatabaseConnectionStatusDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseResourceType">resetDatabaseResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDbmPrivateEndpointId">resetDbmPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerBridgeId">resetEnterpriseManagerBridgeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerEntityIdentifier">resetEnterpriseManagerEntityIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerIdentifier">resetEnterpriseManagerIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetExadataInsightId">resetExadataInsightId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetIsAdvancedFeaturesEnabled">resetIsAdvancedFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetManagementAgentId">resetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOpsiPrivateEndpointId">resetOpsiPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionCredentialDetails` <a name="putConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails"></a>

```java
public void putConnectionCredentialDetails(OpsiDatabaseInsightConnectionCredentialDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

---

##### `putConnectionDetails` <a name="putConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails"></a>

```java
public void putConnectionDetails(OpsiDatabaseInsightConnectionDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

---

##### `putCredentialDetails` <a name="putCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails"></a>

```java
public void putCredentialDetails(OpsiDatabaseInsightCredentialDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts"></a>

```java
public void putTimeouts(OpsiDatabaseInsightTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>

---

##### `resetConnectionCredentialDetails` <a name="resetConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionCredentialDetails"></a>

```java
public void resetConnectionCredentialDetails()
```

##### `resetConnectionDetails` <a name="resetConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionDetails"></a>

```java
public void resetConnectionDetails()
```

##### `resetConnectorId` <a name="resetConnectorId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectorId"></a>

```java
public void resetConnectorId()
```

##### `resetCredentialDetails` <a name="resetCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetCredentialDetails"></a>

```java
public void resetCredentialDetails()
```

##### `resetDatabaseConnectionStatusDetails` <a name="resetDatabaseConnectionStatusDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseConnectionStatusDetails"></a>

```java
public void resetDatabaseConnectionStatusDetails()
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseId"></a>

```java
public void resetDatabaseId()
```

##### `resetDatabaseResourceType` <a name="resetDatabaseResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseResourceType"></a>

```java
public void resetDatabaseResourceType()
```

##### `resetDbmPrivateEndpointId` <a name="resetDbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDbmPrivateEndpointId"></a>

```java
public void resetDbmPrivateEndpointId()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDeploymentType"></a>

```java
public void resetDeploymentType()
```

##### `resetEnterpriseManagerBridgeId` <a name="resetEnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerBridgeId"></a>

```java
public void resetEnterpriseManagerBridgeId()
```

##### `resetEnterpriseManagerEntityIdentifier` <a name="resetEnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerEntityIdentifier"></a>

```java
public void resetEnterpriseManagerEntityIdentifier()
```

##### `resetEnterpriseManagerIdentifier` <a name="resetEnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerIdentifier"></a>

```java
public void resetEnterpriseManagerIdentifier()
```

##### `resetExadataInsightId` <a name="resetExadataInsightId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetExadataInsightId"></a>

```java
public void resetExadataInsightId()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetId"></a>

```java
public void resetId()
```

##### `resetIsAdvancedFeaturesEnabled` <a name="resetIsAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetIsAdvancedFeaturesEnabled"></a>

```java
public void resetIsAdvancedFeaturesEnabled()
```

##### `resetManagementAgentId` <a name="resetManagementAgentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetManagementAgentId"></a>

```java
public void resetManagementAgentId()
```

##### `resetOpsiPrivateEndpointId` <a name="resetOpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOpsiPrivateEndpointId"></a>

```java
public void resetOpsiPrivateEndpointId()
```

##### `resetServiceName` <a name="resetServiceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiDatabaseInsight resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsight;

OpsiDatabaseInsight.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsight;

OpsiDatabaseInsight.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsight;

OpsiDatabaseInsight.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsight;

OpsiDatabaseInsight.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpsiDatabaseInsight.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OpsiDatabaseInsight resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpsiDatabaseInsight to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpsiDatabaseInsight that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OpsiDatabaseInsight to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetails">connectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference">OpsiDatabaseInsightConnectionCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetails">connectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference">OpsiDatabaseInsightConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetails">credentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference">OpsiDatabaseInsightCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseDisplayName">databaseDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseType">databaseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityDisplayName">enterpriseManagerEntityDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityName">enterpriseManagerEntityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityType">enterpriseManagerEntityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHeatWaveClusterAttached">isHeatWaveClusterAttached</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHighlyAvailable">isHighlyAvailable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.parentId">parentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.processorCount">processorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.rootId">rootId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference">OpsiDatabaseInsightTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetailsInput">connectionCredentialDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetailsInput">connectionDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorIdInput">connectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetailsInput">credentialDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetailsInput">databaseConnectionStatusDetailsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceTypeInput">databaseResourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointIdInput">dbmPrivateEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeIdInput">enterpriseManagerBridgeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifierInput">enterpriseManagerEntityIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifierInput">enterpriseManagerIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySourceInput">entitySourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightIdInput">exadataInsightIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabledInput">isAdvancedFeaturesEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointIdInput">opsiPrivateEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetails">databaseConnectionStatusDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceType">databaseResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointId">dbmPrivateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifier">enterpriseManagerEntityIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifier">enterpriseManagerIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySource">entitySource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightId">exadataInsightId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabled">isAdvancedFeaturesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionCredentialDetails`<sup>Required</sup> <a name="connectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetails"></a>

```java
public OpsiDatabaseInsightConnectionCredentialDetailsOutputReference getConnectionCredentialDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference">OpsiDatabaseInsightConnectionCredentialDetailsOutputReference</a>

---

##### `connectionDetails`<sup>Required</sup> <a name="connectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetails"></a>

```java
public OpsiDatabaseInsightConnectionDetailsOutputReference getConnectionDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference">OpsiDatabaseInsightConnectionDetailsOutputReference</a>

---

##### `credentialDetails`<sup>Required</sup> <a name="credentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetails"></a>

```java
public OpsiDatabaseInsightCredentialDetailsOutputReference getCredentialDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference">OpsiDatabaseInsightCredentialDetailsOutputReference</a>

---

##### `databaseDisplayName`<sup>Required</sup> <a name="databaseDisplayName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseDisplayName"></a>

```java
public java.lang.String getDatabaseDisplayName();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseType"></a>

```java
public java.lang.String getDatabaseType();
```

- *Type:* java.lang.String

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerEntityDisplayName`<sup>Required</sup> <a name="enterpriseManagerEntityDisplayName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityDisplayName"></a>

```java
public java.lang.String getEnterpriseManagerEntityDisplayName();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerEntityName`<sup>Required</sup> <a name="enterpriseManagerEntityName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityName"></a>

```java
public java.lang.String getEnterpriseManagerEntityName();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerEntityType`<sup>Required</sup> <a name="enterpriseManagerEntityType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityType"></a>

```java
public java.lang.String getEnterpriseManagerEntityType();
```

- *Type:* java.lang.String

---

##### `isHeatWaveClusterAttached`<sup>Required</sup> <a name="isHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHeatWaveClusterAttached"></a>

```java
public IResolvable getIsHeatWaveClusterAttached();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isHighlyAvailable`<sup>Required</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHighlyAvailable"></a>

```java
public IResolvable getIsHighlyAvailable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.parentId"></a>

```java
public java.lang.String getParentId();
```

- *Type:* java.lang.String

---

##### `processorCount`<sup>Required</sup> <a name="processorCount" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.processorCount"></a>

```java
public java.lang.Number getProcessorCount();
```

- *Type:* java.lang.Number

---

##### `rootId`<sup>Required</sup> <a name="rootId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.rootId"></a>

```java
public java.lang.String getRootId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeouts"></a>

```java
public OpsiDatabaseInsightTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference">OpsiDatabaseInsightTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `connectionCredentialDetailsInput`<sup>Optional</sup> <a name="connectionCredentialDetailsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetailsInput"></a>

```java
public OpsiDatabaseInsightConnectionCredentialDetails getConnectionCredentialDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

---

##### `connectionDetailsInput`<sup>Optional</sup> <a name="connectionDetailsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetailsInput"></a>

```java
public OpsiDatabaseInsightConnectionDetails getConnectionDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

---

##### `connectorIdInput`<sup>Optional</sup> <a name="connectorIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorIdInput"></a>

```java
public java.lang.String getConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `credentialDetailsInput`<sup>Optional</sup> <a name="credentialDetailsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetailsInput"></a>

```java
public OpsiDatabaseInsightCredentialDetails getCredentialDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

---

##### `databaseConnectionStatusDetailsInput`<sup>Optional</sup> <a name="databaseConnectionStatusDetailsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetailsInput"></a>

```java
public java.lang.String getDatabaseConnectionStatusDetailsInput();
```

- *Type:* java.lang.String

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `databaseResourceTypeInput`<sup>Optional</sup> <a name="databaseResourceTypeInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceTypeInput"></a>

```java
public java.lang.String getDatabaseResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `dbmPrivateEndpointIdInput`<sup>Optional</sup> <a name="dbmPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointIdInput"></a>

```java
public java.lang.String getDbmPrivateEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentTypeInput"></a>

```java
public java.lang.String getDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerBridgeIdInput`<sup>Optional</sup> <a name="enterpriseManagerBridgeIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeIdInput"></a>

```java
public java.lang.String getEnterpriseManagerBridgeIdInput();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerEntityIdentifierInput`<sup>Optional</sup> <a name="enterpriseManagerEntityIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifierInput"></a>

```java
public java.lang.String getEnterpriseManagerEntityIdentifierInput();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerIdentifierInput`<sup>Optional</sup> <a name="enterpriseManagerIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifierInput"></a>

```java
public java.lang.String getEnterpriseManagerIdentifierInput();
```

- *Type:* java.lang.String

---

##### `entitySourceInput`<sup>Optional</sup> <a name="entitySourceInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySourceInput"></a>

```java
public java.lang.String getEntitySourceInput();
```

- *Type:* java.lang.String

---

##### `exadataInsightIdInput`<sup>Optional</sup> <a name="exadataInsightIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightIdInput"></a>

```java
public java.lang.String getExadataInsightIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAdvancedFeaturesEnabledInput`<sup>Optional</sup> <a name="isAdvancedFeaturesEnabledInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabledInput"></a>

```java
public java.lang.Object getIsAdvancedFeaturesEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentIdInput"></a>

```java
public java.lang.String getManagementAgentIdInput();
```

- *Type:* java.lang.String

---

##### `opsiPrivateEndpointIdInput`<sup>Optional</sup> <a name="opsiPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointIdInput"></a>

```java
public java.lang.String getOpsiPrivateEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

---

##### `databaseConnectionStatusDetails`<sup>Required</sup> <a name="databaseConnectionStatusDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetails"></a>

```java
public java.lang.String getDatabaseConnectionStatusDetails();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `databaseResourceType`<sup>Required</sup> <a name="databaseResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceType"></a>

```java
public java.lang.String getDatabaseResourceType();
```

- *Type:* java.lang.String

---

##### `dbmPrivateEndpointId`<sup>Required</sup> <a name="dbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointId"></a>

```java
public java.lang.String getDbmPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerBridgeId`<sup>Required</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeId"></a>

```java
public java.lang.String getEnterpriseManagerBridgeId();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerEntityIdentifier`<sup>Required</sup> <a name="enterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifier"></a>

```java
public java.lang.String getEnterpriseManagerEntityIdentifier();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerIdentifier`<sup>Required</sup> <a name="enterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifier"></a>

```java
public java.lang.String getEnterpriseManagerIdentifier();
```

- *Type:* java.lang.String

---

##### `entitySource`<sup>Required</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySource"></a>

```java
public java.lang.String getEntitySource();
```

- *Type:* java.lang.String

---

##### `exadataInsightId`<sup>Required</sup> <a name="exadataInsightId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightId"></a>

```java
public java.lang.String getExadataInsightId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAdvancedFeaturesEnabled`<sup>Required</sup> <a name="isAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabled"></a>

```java
public java.lang.Object getIsAdvancedFeaturesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

---

##### `opsiPrivateEndpointId`<sup>Required</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointId"></a>

```java
public java.lang.String getOpsiPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiDatabaseInsightConfig <a name="OpsiDatabaseInsightConfig" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsightConfig;

OpsiDatabaseInsightConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .entitySource(java.lang.String)
//  .connectionCredentialDetails(OpsiDatabaseInsightConnectionCredentialDetails)
//  .connectionDetails(OpsiDatabaseInsightConnectionDetails)
//  .connectorId(java.lang.String)
//  .credentialDetails(OpsiDatabaseInsightCredentialDetails)
//  .databaseConnectionStatusDetails(java.lang.String)
//  .databaseId(java.lang.String)
//  .databaseResourceType(java.lang.String)
//  .dbmPrivateEndpointId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deploymentType(java.lang.String)
//  .enterpriseManagerBridgeId(java.lang.String)
//  .enterpriseManagerEntityIdentifier(java.lang.String)
//  .enterpriseManagerIdentifier(java.lang.String)
//  .exadataInsightId(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isAdvancedFeaturesEnabled(java.lang.Boolean)
//  .isAdvancedFeaturesEnabled(IResolvable)
//  .managementAgentId(java.lang.String)
//  .opsiPrivateEndpointId(java.lang.String)
//  .serviceName(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(OpsiDatabaseInsightTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#compartment_id OpsiDatabaseInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.entitySource">entitySource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#entity_source OpsiDatabaseInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionCredentialDetails">connectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | connection_credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionDetails">connectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | connection_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connector_id OpsiDatabaseInsight#connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.credentialDetails">credentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseConnectionStatusDetails">databaseConnectionStatusDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_connection_status_details OpsiDatabaseInsight#database_connection_status_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_id OpsiDatabaseInsight#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseResourceType">databaseResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_resource_type OpsiDatabaseInsight#database_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dbmPrivateEndpointId">dbmPrivateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#dbm_private_endpoint_id OpsiDatabaseInsight#dbm_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#defined_tags OpsiDatabaseInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#deployment_type OpsiDatabaseInsight#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_bridge_id OpsiDatabaseInsight#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerEntityIdentifier">enterpriseManagerEntityIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_entity_identifier OpsiDatabaseInsight#enterprise_manager_entity_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerIdentifier">enterpriseManagerIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_identifier OpsiDatabaseInsight#enterprise_manager_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.exadataInsightId">exadataInsightId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#exadata_insight_id OpsiDatabaseInsight#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#freeform_tags OpsiDatabaseInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#id OpsiDatabaseInsight#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.isAdvancedFeaturesEnabled">isAdvancedFeaturesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#is_advanced_features_enabled OpsiDatabaseInsight#is_advanced_features_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#management_agent_id OpsiDatabaseInsight#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#opsi_private_endpoint_id OpsiDatabaseInsight#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#status OpsiDatabaseInsight#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#compartment_id OpsiDatabaseInsight#compartment_id}.

---

##### `entitySource`<sup>Required</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.entitySource"></a>

```java
public java.lang.String getEntitySource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#entity_source OpsiDatabaseInsight#entity_source}.

---

##### `connectionCredentialDetails`<sup>Optional</sup> <a name="connectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionCredentialDetails"></a>

```java
public OpsiDatabaseInsightConnectionCredentialDetails getConnectionCredentialDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

connection_credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connection_credential_details OpsiDatabaseInsight#connection_credential_details}

---

##### `connectionDetails`<sup>Optional</sup> <a name="connectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionDetails"></a>

```java
public OpsiDatabaseInsightConnectionDetails getConnectionDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

connection_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connection_details OpsiDatabaseInsight#connection_details}

---

##### `connectorId`<sup>Optional</sup> <a name="connectorId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connector_id OpsiDatabaseInsight#connector_id}.

---

##### `credentialDetails`<sup>Optional</sup> <a name="credentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.credentialDetails"></a>

```java
public OpsiDatabaseInsightCredentialDetails getCredentialDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_details OpsiDatabaseInsight#credential_details}

---

##### `databaseConnectionStatusDetails`<sup>Optional</sup> <a name="databaseConnectionStatusDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseConnectionStatusDetails"></a>

```java
public java.lang.String getDatabaseConnectionStatusDetails();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_connection_status_details OpsiDatabaseInsight#database_connection_status_details}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_id OpsiDatabaseInsight#database_id}.

---

##### `databaseResourceType`<sup>Optional</sup> <a name="databaseResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseResourceType"></a>

```java
public java.lang.String getDatabaseResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_resource_type OpsiDatabaseInsight#database_resource_type}.

---

##### `dbmPrivateEndpointId`<sup>Optional</sup> <a name="dbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dbmPrivateEndpointId"></a>

```java
public java.lang.String getDbmPrivateEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#dbm_private_endpoint_id OpsiDatabaseInsight#dbm_private_endpoint_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#defined_tags OpsiDatabaseInsight#defined_tags}.

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#deployment_type OpsiDatabaseInsight#deployment_type}.

---

##### `enterpriseManagerBridgeId`<sup>Optional</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerBridgeId"></a>

```java
public java.lang.String getEnterpriseManagerBridgeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_bridge_id OpsiDatabaseInsight#enterprise_manager_bridge_id}.

---

##### `enterpriseManagerEntityIdentifier`<sup>Optional</sup> <a name="enterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerEntityIdentifier"></a>

```java
public java.lang.String getEnterpriseManagerEntityIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_entity_identifier OpsiDatabaseInsight#enterprise_manager_entity_identifier}.

---

##### `enterpriseManagerIdentifier`<sup>Optional</sup> <a name="enterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerIdentifier"></a>

```java
public java.lang.String getEnterpriseManagerIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_identifier OpsiDatabaseInsight#enterprise_manager_identifier}.

---

##### `exadataInsightId`<sup>Optional</sup> <a name="exadataInsightId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.exadataInsightId"></a>

```java
public java.lang.String getExadataInsightId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#exadata_insight_id OpsiDatabaseInsight#exadata_insight_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#freeform_tags OpsiDatabaseInsight#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#id OpsiDatabaseInsight#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAdvancedFeaturesEnabled`<sup>Optional</sup> <a name="isAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.isAdvancedFeaturesEnabled"></a>

```java
public java.lang.Object getIsAdvancedFeaturesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#is_advanced_features_enabled OpsiDatabaseInsight#is_advanced_features_enabled}.

---

##### `managementAgentId`<sup>Optional</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#management_agent_id OpsiDatabaseInsight#management_agent_id}.

---

##### `opsiPrivateEndpointId`<sup>Optional</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.opsiPrivateEndpointId"></a>

```java
public java.lang.String getOpsiPrivateEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#opsi_private_endpoint_id OpsiDatabaseInsight#opsi_private_endpoint_id}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#status OpsiDatabaseInsight#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.timeouts"></a>

```java
public OpsiDatabaseInsightTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#timeouts OpsiDatabaseInsight#timeouts}

---

### OpsiDatabaseInsightConnectionCredentialDetails <a name="OpsiDatabaseInsightConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsightConnectionCredentialDetails;

OpsiDatabaseInsightConnectionCredentialDetails.builder()
    .credentialType(java.lang.String)
//  .credentialSourceName(java.lang.String)
//  .passwordSecretId(java.lang.String)
//  .role(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialSourceName">credentialSourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}.

---

##### `credentialSourceName`<sup>Optional</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialSourceName"></a>

```java
public java.lang.String getCredentialSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}.

---

### OpsiDatabaseInsightConnectionDetails <a name="OpsiDatabaseInsightConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsightConnectionDetails;

OpsiDatabaseInsightConnectionDetails.builder()
//  .hostName(java.lang.String)
//  .hosts(IResolvable)
//  .hosts(java.util.List<OpsiDatabaseInsightConnectionDetailsHosts>)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_name OpsiDatabaseInsight#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hosts">hosts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>></code> | hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#protocol OpsiDatabaseInsight#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}. |

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_name OpsiDatabaseInsight#host_name}.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hosts"></a>

```java
public java.lang.Object getHosts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>>

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#hosts OpsiDatabaseInsight#hosts}

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#protocol OpsiDatabaseInsight#protocol}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}.

---

### OpsiDatabaseInsightConnectionDetailsHosts <a name="OpsiDatabaseInsightConnectionDetailsHosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsightConnectionDetailsHosts;

OpsiDatabaseInsightConnectionDetailsHosts.builder()
//  .hostIp(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.hostIp">hostIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_ip OpsiDatabaseInsight#host_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}. |

---

##### `hostIp`<sup>Optional</sup> <a name="hostIp" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.hostIp"></a>

```java
public java.lang.String getHostIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_ip OpsiDatabaseInsight#host_ip}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}.

---

### OpsiDatabaseInsightCredentialDetails <a name="OpsiDatabaseInsightCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsightCredentialDetails;

OpsiDatabaseInsightCredentialDetails.builder()
    .credentialType(java.lang.String)
//  .credentialSourceName(java.lang.String)
//  .passwordSecretId(java.lang.String)
//  .role(java.lang.String)
//  .userName(java.lang.String)
//  .walletSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialSourceName">credentialSourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.walletSecretId">walletSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#wallet_secret_id OpsiDatabaseInsight#wallet_secret_id}. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}.

---

##### `credentialSourceName`<sup>Optional</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialSourceName"></a>

```java
public java.lang.String getCredentialSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}.

---

##### `walletSecretId`<sup>Optional</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.walletSecretId"></a>

```java
public java.lang.String getWalletSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#wallet_secret_id OpsiDatabaseInsight#wallet_secret_id}.

---

### OpsiDatabaseInsightTimeouts <a name="OpsiDatabaseInsightTimeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsightTimeouts;

OpsiDatabaseInsightTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#create OpsiDatabaseInsight#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#delete OpsiDatabaseInsight#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#update OpsiDatabaseInsight#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#create OpsiDatabaseInsight#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#delete OpsiDatabaseInsight#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#update OpsiDatabaseInsight#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiDatabaseInsightConnectionCredentialDetailsOutputReference <a name="OpsiDatabaseInsightConnectionCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference;

new OpsiDatabaseInsightConnectionCredentialDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetCredentialSourceName">resetCredentialSourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialSourceName` <a name="resetCredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetCredentialSourceName"></a>

```java
public void resetCredentialSourceName()
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetPasswordSecretId"></a>

```java
public void resetPasswordSecretId()
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetRole"></a>

```java
public void resetRole()
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetUserName"></a>

```java
public void resetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceNameInput">credentialSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceName">credentialSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialSourceNameInput`<sup>Optional</sup> <a name="credentialSourceNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceNameInput"></a>

```java
public java.lang.String getCredentialSourceNameInput();
```

- *Type:* java.lang.String

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```java
public java.lang.String getPasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `credentialSourceName`<sup>Required</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceName"></a>

```java
public java.lang.String getCredentialSourceName();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.internalValue"></a>

```java
public OpsiDatabaseInsightConnectionCredentialDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

---


### OpsiDatabaseInsightConnectionDetailsHostsList <a name="OpsiDatabaseInsightConnectionDetailsHostsList" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsightConnectionDetailsHostsList;

new OpsiDatabaseInsightConnectionDetailsHostsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.get"></a>

```java
public OpsiDatabaseInsightConnectionDetailsHostsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>>

---


### OpsiDatabaseInsightConnectionDetailsHostsOutputReference <a name="OpsiDatabaseInsightConnectionDetailsHostsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference;

new OpsiDatabaseInsightConnectionDetailsHostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetHostIp">resetHostIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostIp` <a name="resetHostIp" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetHostIp"></a>

```java
public void resetHostIp()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIpInput">hostIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIp">hostIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostIpInput`<sup>Optional</sup> <a name="hostIpInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIpInput"></a>

```java
public java.lang.String getHostIpInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `hostIp`<sup>Required</sup> <a name="hostIp" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIp"></a>

```java
public java.lang.String getHostIp();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>

---


### OpsiDatabaseInsightConnectionDetailsOutputReference <a name="OpsiDatabaseInsightConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsightConnectionDetailsOutputReference;

new OpsiDatabaseInsightConnectionDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.putHosts">putHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHosts` <a name="putHosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.putHosts"></a>

```java
public void putHosts(IResolvable OR java.util.List<OpsiDatabaseInsightConnectionDetailsHosts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.putHosts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>>

---

##### `resetHostName` <a name="resetHostName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHostName"></a>

```java
public void resetHostName()
```

##### `resetHosts` <a name="resetHosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHosts"></a>

```java
public void resetHosts()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetServiceName` <a name="resetServiceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hosts">hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList">OpsiDatabaseInsightConnectionDetailsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostsInput">hostsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hosts"></a>

```java
public OpsiDatabaseInsightConnectionDetailsHostsList getHosts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList">OpsiDatabaseInsightConnectionDetailsHostsList</a>

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostsInput"></a>

```java
public java.lang.Object getHostsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.internalValue"></a>

```java
public OpsiDatabaseInsightConnectionDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

---


### OpsiDatabaseInsightCredentialDetailsOutputReference <a name="OpsiDatabaseInsightCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsightCredentialDetailsOutputReference;

new OpsiDatabaseInsightCredentialDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetCredentialSourceName">resetCredentialSourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetWalletSecretId">resetWalletSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialSourceName` <a name="resetCredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetCredentialSourceName"></a>

```java
public void resetCredentialSourceName()
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetPasswordSecretId"></a>

```java
public void resetPasswordSecretId()
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetRole"></a>

```java
public void resetRole()
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetUserName"></a>

```java
public void resetUserName()
```

##### `resetWalletSecretId` <a name="resetWalletSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetWalletSecretId"></a>

```java
public void resetWalletSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceNameInput">credentialSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretIdInput">walletSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceName">credentialSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretId">walletSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialSourceNameInput`<sup>Optional</sup> <a name="credentialSourceNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceNameInput"></a>

```java
public java.lang.String getCredentialSourceNameInput();
```

- *Type:* java.lang.String

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```java
public java.lang.String getPasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `walletSecretIdInput`<sup>Optional</sup> <a name="walletSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretIdInput"></a>

```java
public java.lang.String getWalletSecretIdInput();
```

- *Type:* java.lang.String

---

##### `credentialSourceName`<sup>Required</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceName"></a>

```java
public java.lang.String getCredentialSourceName();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `walletSecretId`<sup>Required</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretId"></a>

```java
public java.lang.String getWalletSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.internalValue"></a>

```java
public OpsiDatabaseInsightCredentialDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

---


### OpsiDatabaseInsightTimeoutsOutputReference <a name="OpsiDatabaseInsightTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_database_insight.OpsiDatabaseInsightTimeoutsOutputReference;

new OpsiDatabaseInsightTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>

---




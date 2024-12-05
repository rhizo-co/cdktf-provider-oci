# `databaseAutonomousExadataInfrastructure` Submodule <a name="`databaseAutonomousExadataInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousExadataInfrastructure <a name="DatabaseAutonomousExadataInfrastructure" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure oci_database_autonomous_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructure;

DatabaseAutonomousExadataInfrastructure.Builder.create(Construct scope, java.lang.String id)
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
    .shape(java.lang.String)
    .subnetId(java.lang.String)
//  .createAsync(java.lang.Boolean)
//  .createAsync(IResolvable)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .domain(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .licenseModel(java.lang.String)
//  .maintenanceWindowDetails(DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails)
//  .nsgIds(java.util.List<java.lang.String>)
//  .timeouts(DatabaseAutonomousExadataInfrastructureTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#availability_domain DatabaseAutonomousExadataInfrastructure#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#compartment_id DatabaseAutonomousExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#shape DatabaseAutonomousExadataInfrastructure#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#subnet_id DatabaseAutonomousExadataInfrastructure#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#create_async DatabaseAutonomousExadataInfrastructure#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#defined_tags DatabaseAutonomousExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#display_name DatabaseAutonomousExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#domain DatabaseAutonomousExadataInfrastructure#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#freeform_tags DatabaseAutonomousExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#id DatabaseAutonomousExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#license_model DatabaseAutonomousExadataInfrastructure#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a></code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#nsg_ids DatabaseAutonomousExadataInfrastructure#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts">DatabaseAutonomousExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#availability_domain DatabaseAutonomousExadataInfrastructure#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#compartment_id DatabaseAutonomousExadataInfrastructure#compartment_id}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#shape DatabaseAutonomousExadataInfrastructure#shape}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#subnet_id DatabaseAutonomousExadataInfrastructure#subnet_id}.

---

##### `createAsync`<sup>Optional</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.createAsync"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#create_async DatabaseAutonomousExadataInfrastructure#create_async}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#defined_tags DatabaseAutonomousExadataInfrastructure#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#display_name DatabaseAutonomousExadataInfrastructure#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#domain DatabaseAutonomousExadataInfrastructure#domain}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#freeform_tags DatabaseAutonomousExadataInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#id DatabaseAutonomousExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#license_model DatabaseAutonomousExadataInfrastructure#license_model}.

---

##### `maintenanceWindowDetails`<sup>Optional</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.maintenanceWindowDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a>

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#maintenance_window_details DatabaseAutonomousExadataInfrastructure#maintenance_window_details}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#nsg_ids DatabaseAutonomousExadataInfrastructure#nsg_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts">DatabaseAutonomousExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#timeouts DatabaseAutonomousExadataInfrastructure#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.putMaintenanceWindowDetails">putMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetCreateAsync">resetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetMaintenanceWindowDetails">resetMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaintenanceWindowDetails` <a name="putMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.putMaintenanceWindowDetails"></a>

```java
public void putMaintenanceWindowDetails(DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.putMaintenanceWindowDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.putTimeouts"></a>

```java
public void putTimeouts(DatabaseAutonomousExadataInfrastructureTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts">DatabaseAutonomousExadataInfrastructureTimeouts</a>

---

##### `resetCreateAsync` <a name="resetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetCreateAsync"></a>

```java
public void resetCreateAsync()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDomain` <a name="resetDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetId"></a>

```java
public void resetId()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetMaintenanceWindowDetails` <a name="resetMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetMaintenanceWindowDetails"></a>

```java
public void resetMaintenanceWindowDetails()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructure;

DatabaseAutonomousExadataInfrastructure.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructure;

DatabaseAutonomousExadataInfrastructure.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructure;

DatabaseAutonomousExadataInfrastructure.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructure;

DatabaseAutonomousExadataInfrastructure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseAutonomousExadataInfrastructure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseAutonomousExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseAutonomousExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseAutonomousExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.lastMaintenanceRunId">lastMaintenanceRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.nextMaintenanceRunId">nextMaintenanceRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.scanDnsName">scanDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference">DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.createAsyncInput">createAsyncInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.maintenanceWindowDetailsInput">maintenanceWindowDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts">DatabaseAutonomousExadataInfrastructureTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `lastMaintenanceRunId`<sup>Required</sup> <a name="lastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.lastMaintenanceRunId"></a>

```java
public java.lang.String getLastMaintenanceRunId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.maintenanceWindow"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowList getMaintenanceWindow();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowList</a>

---

##### `maintenanceWindowDetails`<sup>Required</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.maintenanceWindowDetails"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference getMaintenanceWindowDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference</a>

---

##### `nextMaintenanceRunId`<sup>Required</sup> <a name="nextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.nextMaintenanceRunId"></a>

```java
public java.lang.String getNextMaintenanceRunId();
```

- *Type:* java.lang.String

---

##### `scanDnsName`<sup>Required</sup> <a name="scanDnsName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.scanDnsName"></a>

```java
public java.lang.String getScanDnsName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.timeouts"></a>

```java
public DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference">DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference</a>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `createAsyncInput`<sup>Optional</sup> <a name="createAsyncInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.createAsyncInput"></a>

```java
public java.lang.Object getCreateAsyncInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowDetailsInput`<sup>Optional</sup> <a name="maintenanceWindowDetailsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.maintenanceWindowDetailsInput"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails getMaintenanceWindowDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a>

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts">DatabaseAutonomousExadataInfrastructureTimeouts</a>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `createAsync`<sup>Required</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.createAsync"></a>

```java
public java.lang.Object getCreateAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousExadataInfrastructureConfig <a name="DatabaseAutonomousExadataInfrastructureConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureConfig;

DatabaseAutonomousExadataInfrastructureConfig.builder()
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
    .shape(java.lang.String)
    .subnetId(java.lang.String)
//  .createAsync(java.lang.Boolean)
//  .createAsync(IResolvable)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .domain(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .licenseModel(java.lang.String)
//  .maintenanceWindowDetails(DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails)
//  .nsgIds(java.util.List<java.lang.String>)
//  .timeouts(DatabaseAutonomousExadataInfrastructureTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#availability_domain DatabaseAutonomousExadataInfrastructure#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#compartment_id DatabaseAutonomousExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#shape DatabaseAutonomousExadataInfrastructure#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#subnet_id DatabaseAutonomousExadataInfrastructure#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#create_async DatabaseAutonomousExadataInfrastructure#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#defined_tags DatabaseAutonomousExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#display_name DatabaseAutonomousExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#domain DatabaseAutonomousExadataInfrastructure#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#freeform_tags DatabaseAutonomousExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#id DatabaseAutonomousExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#license_model DatabaseAutonomousExadataInfrastructure#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a></code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#nsg_ids DatabaseAutonomousExadataInfrastructure#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts">DatabaseAutonomousExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#availability_domain DatabaseAutonomousExadataInfrastructure#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#compartment_id DatabaseAutonomousExadataInfrastructure#compartment_id}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#shape DatabaseAutonomousExadataInfrastructure#shape}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#subnet_id DatabaseAutonomousExadataInfrastructure#subnet_id}.

---

##### `createAsync`<sup>Optional</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.createAsync"></a>

```java
public java.lang.Object getCreateAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#create_async DatabaseAutonomousExadataInfrastructure#create_async}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#defined_tags DatabaseAutonomousExadataInfrastructure#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#display_name DatabaseAutonomousExadataInfrastructure#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#domain DatabaseAutonomousExadataInfrastructure#domain}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#freeform_tags DatabaseAutonomousExadataInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#id DatabaseAutonomousExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#license_model DatabaseAutonomousExadataInfrastructure#license_model}.

---

##### `maintenanceWindowDetails`<sup>Optional</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.maintenanceWindowDetails"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails getMaintenanceWindowDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a>

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#maintenance_window_details DatabaseAutonomousExadataInfrastructure#maintenance_window_details}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#nsg_ids DatabaseAutonomousExadataInfrastructure#nsg_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.timeouts"></a>

```java
public DatabaseAutonomousExadataInfrastructureTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts">DatabaseAutonomousExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#timeouts DatabaseAutonomousExadataInfrastructure#timeouts}

---

### DatabaseAutonomousExadataInfrastructureMaintenanceWindow <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindow;

DatabaseAutonomousExadataInfrastructureMaintenanceWindow.builder()
    .build();
```


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek;

DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek.builder()
    .build();
```


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails;

DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.builder()
//  .customActionTimeoutInMins(java.lang.Number)
//  .daysOfWeek(IResolvable)
//  .daysOfWeek(java.util.List<DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek>)
//  .hoursOfDay(java.util.List<java.lang.Number>)
//  .isCustomActionTimeoutEnabled(java.lang.Boolean)
//  .isCustomActionTimeoutEnabled(IResolvable)
//  .isMonthlyPatchingEnabled(java.lang.Boolean)
//  .isMonthlyPatchingEnabled(IResolvable)
//  .leadTimeInWeeks(java.lang.Number)
//  .months(IResolvable)
//  .months(java.util.List<DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths>)
//  .patchingMode(java.lang.String)
//  .preference(java.lang.String)
//  .skipRu(IResolvable)
//  .skipRu(java.util.List<java.lang.Boolean)
//  .skipRu(IResolvable>)
//  .weeksOfMonth(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#custom_action_timeout_in_mins DatabaseAutonomousExadataInfrastructure#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.daysOfWeek">daysOfWeek</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek</a>></code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#hours_of_day DatabaseAutonomousExadataInfrastructure#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseAutonomousExadataInfrastructure#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#is_monthly_patching_enabled DatabaseAutonomousExadataInfrastructure#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#lead_time_in_weeks DatabaseAutonomousExadataInfrastructure#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.months">months</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths</a>></code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#patching_mode DatabaseAutonomousExadataInfrastructure#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.preference">preference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#preference DatabaseAutonomousExadataInfrastructure#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.skipRu">skipRu</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#skip_ru DatabaseAutonomousExadataInfrastructure#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#weeks_of_month DatabaseAutonomousExadataInfrastructure#weeks_of_month}. |

---

##### `customActionTimeoutInMins`<sup>Optional</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#custom_action_timeout_in_mins DatabaseAutonomousExadataInfrastructure#custom_action_timeout_in_mins}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.daysOfWeek"></a>

```java
public java.lang.Object getDaysOfWeek();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek</a>>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#days_of_week DatabaseAutonomousExadataInfrastructure#days_of_week}

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#hours_of_day DatabaseAutonomousExadataInfrastructure#hours_of_day}.

---

##### `isCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled"></a>

```java
public java.lang.Object getIsCustomActionTimeoutEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseAutonomousExadataInfrastructure#is_custom_action_timeout_enabled}.

---

##### `isMonthlyPatchingEnabled`<sup>Optional</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.isMonthlyPatchingEnabled"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#is_monthly_patching_enabled DatabaseAutonomousExadataInfrastructure#is_monthly_patching_enabled}.

---

##### `leadTimeInWeeks`<sup>Optional</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#lead_time_in_weeks DatabaseAutonomousExadataInfrastructure#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.months"></a>

```java
public java.lang.Object getMonths();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths</a>>

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#months DatabaseAutonomousExadataInfrastructure#months}

---

##### `patchingMode`<sup>Optional</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#patching_mode DatabaseAutonomousExadataInfrastructure#patching_mode}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#preference DatabaseAutonomousExadataInfrastructure#preference}.

---

##### `skipRu`<sup>Optional</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.skipRu"></a>

```java
public java.lang.Object getSkipRu();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#skip_ru DatabaseAutonomousExadataInfrastructure#skip_ru}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#weeks_of_month DatabaseAutonomousExadataInfrastructure#weeks_of_month}.

---

### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek;

DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#name DatabaseAutonomousExadataInfrastructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#name DatabaseAutonomousExadataInfrastructure#name}.

---

### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths;

DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#name DatabaseAutonomousExadataInfrastructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#name DatabaseAutonomousExadataInfrastructure#name}.

---

### DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths;

DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths.builder()
    .build();
```


### DatabaseAutonomousExadataInfrastructureTimeouts <a name="DatabaseAutonomousExadataInfrastructureTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureTimeouts;

DatabaseAutonomousExadataInfrastructureTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#create DatabaseAutonomousExadataInfrastructure#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#delete DatabaseAutonomousExadataInfrastructure#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#update DatabaseAutonomousExadataInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#create DatabaseAutonomousExadataInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#delete DatabaseAutonomousExadataInfrastructure#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#update DatabaseAutonomousExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.get"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek</a>

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek</a>>

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek</a>

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.get"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths</a>>

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths</a>

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.putDaysOfWeek">putDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.putMonths">putMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins">resetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled">resetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled">resetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks">resetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetPatchingMode">resetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetSkipRu">resetSkipRu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaysOfWeek` <a name="putDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.putDaysOfWeek"></a>

```java
public void putDaysOfWeek(IResolvable OR java.util.List<DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek</a>>

---

##### `putMonths` <a name="putMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.putMonths"></a>

```java
public void putMonths(IResolvable OR java.util.List<DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.putMonths.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths</a>>

---

##### `resetCustomActionTimeoutInMins` <a name="resetCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins"></a>

```java
public void resetCustomActionTimeoutInMins()
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetHoursOfDay"></a>

```java
public void resetHoursOfDay()
```

##### `resetIsCustomActionTimeoutEnabled` <a name="resetIsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```java
public void resetIsCustomActionTimeoutEnabled()
```

##### `resetIsMonthlyPatchingEnabled` <a name="resetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled"></a>

```java
public void resetIsMonthlyPatchingEnabled()
```

##### `resetLeadTimeInWeeks` <a name="resetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks"></a>

```java
public void resetLeadTimeInWeeks()
```

##### `resetMonths` <a name="resetMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetMonths"></a>

```java
public void resetMonths()
```

##### `resetPatchingMode` <a name="resetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetPatchingMode"></a>

```java
public void resetPatchingMode()
```

##### `resetPreference` <a name="resetPreference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetPreference"></a>

```java
public void resetPreference()
```

##### `resetSkipRu` <a name="resetSkipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetSkipRu"></a>

```java
public void resetSkipRu()
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth"></a>

```java
public void resetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput">customActionTimeoutInMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput">isCustomActionTimeoutEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput">isMonthlyPatchingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput">leadTimeInWeeksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.monthsInput">monthsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.patchingModeInput">patchingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.skipRuInput">skipRuInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.skipRu">skipRu</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList getDaysOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.months"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList getMonths();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList</a>

---

##### `customActionTimeoutInMinsInput`<sup>Optional</sup> <a name="customActionTimeoutInMinsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput"></a>

```java
public java.lang.Number getCustomActionTimeoutInMinsInput();
```

- *Type:* java.lang.Number

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput"></a>

```java
public java.lang.Object getDaysOfWeekInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek</a>>

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDayInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```java
public java.lang.Object getIsCustomActionTimeoutEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="isMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeksInput`<sup>Optional</sup> <a name="leadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput"></a>

```java
public java.lang.Number getLeadTimeInWeeksInput();
```

- *Type:* java.lang.Number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.monthsInput"></a>

```java
public java.lang.Object getMonthsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths</a>>

---

##### `patchingModeInput`<sup>Optional</sup> <a name="patchingModeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.patchingModeInput"></a>

```java
public java.lang.String getPatchingModeInput();
```

- *Type:* java.lang.String

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.preferenceInput"></a>

```java
public java.lang.String getPreferenceInput();
```

- *Type:* java.lang.String

---

##### `skipRuInput`<sup>Optional</sup> <a name="skipRuInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.skipRuInput"></a>

```java
public java.lang.Object getSkipRuInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```java
public java.lang.Object getIsCustomActionTimeoutEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```java
public java.lang.Object getSkipRu();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a>

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowList <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.get"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.get"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths">DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths">DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths</a>

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu">skipRu</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindow">DatabaseAutonomousExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList getDaysOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```java
public IResolvable getIsCustomActionTimeoutEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```java
public IResolvable getIsMonthlyPatchingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList getMonths();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList</a>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu"></a>

```java
public BooleanList getSkipRu();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousExadataInfrastructureMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindow">DatabaseAutonomousExadataInfrastructureMaintenanceWindow</a>

---


### DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference <a name="DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_exadata_infrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference;

new DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts">DatabaseAutonomousExadataInfrastructureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts">DatabaseAutonomousExadataInfrastructureTimeouts</a>

---




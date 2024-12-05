# `databaseToolsDatabaseToolsPrivateEndpoint` Submodule <a name="`databaseToolsDatabaseToolsPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseToolsDatabaseToolsPrivateEndpoint <a name="DatabaseToolsDatabaseToolsPrivateEndpoint" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint oci_database_tools_database_tools_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpoint;

DatabaseToolsDatabaseToolsPrivateEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .endpointServiceId(java.lang.String)
    .subnetId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .locks(IResolvable)
//  .locks(java.util.List<DatabaseToolsDatabaseToolsPrivateEndpointLocks>)
//  .nsgIds(java.util.List<java.lang.String>)
//  .privateEndpointIp(java.lang.String)
//  .timeouts(DatabaseToolsDatabaseToolsPrivateEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#compartment_id DatabaseToolsDatabaseToolsPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#display_name DatabaseToolsDatabaseToolsPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.endpointServiceId">endpointServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#endpoint_service_id DatabaseToolsDatabaseToolsPrivateEndpoint#endpoint_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#subnet_id DatabaseToolsDatabaseToolsPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#defined_tags DatabaseToolsDatabaseToolsPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#description DatabaseToolsDatabaseToolsPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#freeform_tags DatabaseToolsDatabaseToolsPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#id DatabaseToolsDatabaseToolsPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#nsg_ids DatabaseToolsDatabaseToolsPrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#private_endpoint_ip DatabaseToolsDatabaseToolsPrivateEndpoint#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#compartment_id DatabaseToolsDatabaseToolsPrivateEndpoint#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#display_name DatabaseToolsDatabaseToolsPrivateEndpoint#display_name}.

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.endpointServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#endpoint_service_id DatabaseToolsDatabaseToolsPrivateEndpoint#endpoint_service_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#subnet_id DatabaseToolsDatabaseToolsPrivateEndpoint#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#defined_tags DatabaseToolsDatabaseToolsPrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#description DatabaseToolsDatabaseToolsPrivateEndpoint#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#freeform_tags DatabaseToolsDatabaseToolsPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#id DatabaseToolsDatabaseToolsPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.locks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#locks DatabaseToolsDatabaseToolsPrivateEndpoint#locks}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#nsg_ids DatabaseToolsDatabaseToolsPrivateEndpoint#nsg_ids}.

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.privateEndpointIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#private_endpoint_ip DatabaseToolsDatabaseToolsPrivateEndpoint#private_endpoint_ip}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#timeouts DatabaseToolsDatabaseToolsPrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetPrivateEndpointIp">resetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putLocks"></a>

```java
public void putLocks(IResolvable OR java.util.List<DatabaseToolsDatabaseToolsPrivateEndpointLocks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putLocks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putTimeouts"></a>

```java
public void putTimeouts(DatabaseToolsDatabaseToolsPrivateEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetPrivateEndpointIp` <a name="resetPrivateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetPrivateEndpointIp"></a>

```java
public void resetPrivateEndpointIp()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseToolsDatabaseToolsPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpoint;

DatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpoint;

DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpoint;

DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpoint;

DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseToolsDatabaseToolsPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseToolsDatabaseToolsPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseToolsDatabaseToolsPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseToolsDatabaseToolsPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.additionalFqdns">additionalFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointFqdn">endpointFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList">DatabaseToolsDatabaseToolsPrivateEndpointLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointVnicId">privateEndpointVnicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.reverseConnectionConfiguration">reverseConnectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference">DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceIdInput">endpointServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.locksInput">locksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIpInput">privateEndpointIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceId">endpointServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalFqdns`<sup>Required</sup> <a name="additionalFqdns" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.additionalFqdns"></a>

```java
public java.util.List<java.lang.String> getAdditionalFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endpointFqdn`<sup>Required</sup> <a name="endpointFqdn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointFqdn"></a>

```java
public java.lang.String getEndpointFqdn();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.locks"></a>

```java
public DatabaseToolsDatabaseToolsPrivateEndpointLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList">DatabaseToolsDatabaseToolsPrivateEndpointLocksList</a>

---

##### `privateEndpointVnicId`<sup>Required</sup> <a name="privateEndpointVnicId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointVnicId"></a>

```java
public java.lang.String getPrivateEndpointVnicId();
```

- *Type:* java.lang.String

---

##### `reverseConnectionConfiguration`<sup>Required</sup> <a name="reverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.reverseConnectionConfiguration"></a>

```java
public DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList getReverseConnectionConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeouts"></a>

```java
public DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference">DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `endpointServiceIdInput`<sup>Optional</sup> <a name="endpointServiceIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceIdInput"></a>

```java
public java.lang.String getEndpointServiceIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.locksInput"></a>

```java
public java.lang.Object getLocksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>>

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateEndpointIpInput`<sup>Optional</sup> <a name="privateEndpointIpInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIpInput"></a>

```java
public java.lang.String getPrivateEndpointIpInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceId"></a>

```java
public java.lang.String getEndpointServiceId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseToolsDatabaseToolsPrivateEndpointConfig <a name="DatabaseToolsDatabaseToolsPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig;

DatabaseToolsDatabaseToolsPrivateEndpointConfig.builder()
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
    .displayName(java.lang.String)
    .endpointServiceId(java.lang.String)
    .subnetId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .locks(IResolvable)
//  .locks(java.util.List<DatabaseToolsDatabaseToolsPrivateEndpointLocks>)
//  .nsgIds(java.util.List<java.lang.String>)
//  .privateEndpointIp(java.lang.String)
//  .timeouts(DatabaseToolsDatabaseToolsPrivateEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#compartment_id DatabaseToolsDatabaseToolsPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#display_name DatabaseToolsDatabaseToolsPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.endpointServiceId">endpointServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#endpoint_service_id DatabaseToolsDatabaseToolsPrivateEndpoint#endpoint_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#subnet_id DatabaseToolsDatabaseToolsPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#defined_tags DatabaseToolsDatabaseToolsPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#description DatabaseToolsDatabaseToolsPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#freeform_tags DatabaseToolsDatabaseToolsPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#id DatabaseToolsDatabaseToolsPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#nsg_ids DatabaseToolsDatabaseToolsPrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#private_endpoint_ip DatabaseToolsDatabaseToolsPrivateEndpoint#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#compartment_id DatabaseToolsDatabaseToolsPrivateEndpoint#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#display_name DatabaseToolsDatabaseToolsPrivateEndpoint#display_name}.

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.endpointServiceId"></a>

```java
public java.lang.String getEndpointServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#endpoint_service_id DatabaseToolsDatabaseToolsPrivateEndpoint#endpoint_service_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#subnet_id DatabaseToolsDatabaseToolsPrivateEndpoint#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#defined_tags DatabaseToolsDatabaseToolsPrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#description DatabaseToolsDatabaseToolsPrivateEndpoint#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#freeform_tags DatabaseToolsDatabaseToolsPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#id DatabaseToolsDatabaseToolsPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.locks"></a>

```java
public java.lang.Object getLocks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#locks DatabaseToolsDatabaseToolsPrivateEndpoint#locks}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#nsg_ids DatabaseToolsDatabaseToolsPrivateEndpoint#nsg_ids}.

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#private_endpoint_ip DatabaseToolsDatabaseToolsPrivateEndpoint#private_endpoint_ip}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.timeouts"></a>

```java
public DatabaseToolsDatabaseToolsPrivateEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#timeouts DatabaseToolsDatabaseToolsPrivateEndpoint#timeouts}

---

### DatabaseToolsDatabaseToolsPrivateEndpointLocks <a name="DatabaseToolsDatabaseToolsPrivateEndpointLocks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks;

DatabaseToolsDatabaseToolsPrivateEndpointLocks.builder()
    .type(java.lang.String)
//  .message(java.lang.String)
//  .relatedResourceId(java.lang.String)
//  .timeCreated(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#type DatabaseToolsDatabaseToolsPrivateEndpoint#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#message DatabaseToolsDatabaseToolsPrivateEndpoint#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#related_resource_id DatabaseToolsDatabaseToolsPrivateEndpoint#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#time_created DatabaseToolsDatabaseToolsPrivateEndpoint#time_created}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#type DatabaseToolsDatabaseToolsPrivateEndpoint#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#message DatabaseToolsDatabaseToolsPrivateEndpoint#message}.

---

##### `relatedResourceId`<sup>Optional</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#related_resource_id DatabaseToolsDatabaseToolsPrivateEndpoint#related_resource_id}.

---

##### `timeCreated`<sup>Optional</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#time_created DatabaseToolsDatabaseToolsPrivateEndpoint#time_created}.

---

### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration;

DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration.builder()
    .build();
```


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps;

DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps.builder()
    .build();
```


### DatabaseToolsDatabaseToolsPrivateEndpointTimeouts <a name="DatabaseToolsDatabaseToolsPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts;

DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#create DatabaseToolsDatabaseToolsPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#delete DatabaseToolsDatabaseToolsPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#update DatabaseToolsDatabaseToolsPrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#create DatabaseToolsDatabaseToolsPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#delete DatabaseToolsDatabaseToolsPrivateEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#update DatabaseToolsDatabaseToolsPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseToolsDatabaseToolsPrivateEndpointLocksList <a name="DatabaseToolsDatabaseToolsPrivateEndpointLocksList" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList;

new DatabaseToolsDatabaseToolsPrivateEndpointLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.get"></a>

```java
public DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>>

---


### DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference <a name="DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference;

new DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetRelatedResourceId">resetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetTimeCreated">resetTimeCreated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetRelatedResourceId` <a name="resetRelatedResourceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetRelatedResourceId"></a>

```java
public void resetRelatedResourceId()
```

##### `resetTimeCreated` <a name="resetTimeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetTimeCreated"></a>

```java
public void resetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceIdInput">relatedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreatedInput">timeCreatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `relatedResourceIdInput`<sup>Optional</sup> <a name="relatedResourceIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceIdInput"></a>

```java
public java.lang.String getRelatedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedInput`<sup>Optional</sup> <a name="timeCreatedInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreatedInput"></a>

```java
public java.lang.String getTimeCreatedInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>

---


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList;

new DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.get"></a>

```java
public DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference;

new DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps">reverseConnectionsSourceIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reverseConnectionsSourceIps`<sup>Required</sup> <a name="reverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps"></a>

```java
public DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList getReverseConnectionsSourceIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.internalValue"></a>

```java
public DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration</a>

---


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList;

new DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.get"></a>

```java
public DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference;

new DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp">sourceIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp"></a>

```java
public java.lang.String getSourceIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue"></a>

```java
public DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps</a>

---


### DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference <a name="DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_tools_database_tools_private_endpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference;

new DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a>

---




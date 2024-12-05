# `opsiOperationsInsightsWarehouseUser` Submodule <a name="`opsiOperationsInsightsWarehouseUser` Submodule" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiOperationsInsightsWarehouseUser <a name="OpsiOperationsInsightsWarehouseUser" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user oci_opsi_operations_insights_warehouse_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_operations_insights_warehouse_user.OpsiOperationsInsightsWarehouseUser;

OpsiOperationsInsightsWarehouseUser.Builder.create(Construct scope, java.lang.String id)
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
    .connectionPassword(java.lang.String)
    .isAwrDataAccess(java.lang.Boolean)
    .isAwrDataAccess(IResolvable)
    .name(java.lang.String)
    .operationsInsightsWarehouseId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isEmDataAccess(java.lang.Boolean)
//  .isEmDataAccess(IResolvable)
//  .isOpsiDataAccess(java.lang.Boolean)
//  .isOpsiDataAccess(IResolvable)
//  .timeouts(OpsiOperationsInsightsWarehouseUserTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#compartment_id OpsiOperationsInsightsWarehouseUser#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.connectionPassword">connectionPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#connection_password OpsiOperationsInsightsWarehouseUser#connection_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.isAwrDataAccess">isAwrDataAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_awr_data_access OpsiOperationsInsightsWarehouseUser#is_awr_data_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#name OpsiOperationsInsightsWarehouseUser#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.operationsInsightsWarehouseId">operationsInsightsWarehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseUser#operations_insights_warehouse_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#defined_tags OpsiOperationsInsightsWarehouseUser#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#freeform_tags OpsiOperationsInsightsWarehouseUser#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#id OpsiOperationsInsightsWarehouseUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.isEmDataAccess">isEmDataAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_em_data_access OpsiOperationsInsightsWarehouseUser#is_em_data_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.isOpsiDataAccess">isOpsiDataAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_opsi_data_access OpsiOperationsInsightsWarehouseUser#is_opsi_data_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts">OpsiOperationsInsightsWarehouseUserTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#compartment_id OpsiOperationsInsightsWarehouseUser#compartment_id}.

---

##### `connectionPassword`<sup>Required</sup> <a name="connectionPassword" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.connectionPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#connection_password OpsiOperationsInsightsWarehouseUser#connection_password}.

---

##### `isAwrDataAccess`<sup>Required</sup> <a name="isAwrDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.isAwrDataAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_awr_data_access OpsiOperationsInsightsWarehouseUser#is_awr_data_access}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#name OpsiOperationsInsightsWarehouseUser#name}.

---

##### `operationsInsightsWarehouseId`<sup>Required</sup> <a name="operationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.operationsInsightsWarehouseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseUser#operations_insights_warehouse_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#defined_tags OpsiOperationsInsightsWarehouseUser#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#freeform_tags OpsiOperationsInsightsWarehouseUser#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#id OpsiOperationsInsightsWarehouseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEmDataAccess`<sup>Optional</sup> <a name="isEmDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.isEmDataAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_em_data_access OpsiOperationsInsightsWarehouseUser#is_em_data_access}.

---

##### `isOpsiDataAccess`<sup>Optional</sup> <a name="isOpsiDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.isOpsiDataAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_opsi_data_access OpsiOperationsInsightsWarehouseUser#is_opsi_data_access}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts">OpsiOperationsInsightsWarehouseUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#timeouts OpsiOperationsInsightsWarehouseUser#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetIsEmDataAccess">resetIsEmDataAccess</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetIsOpsiDataAccess">resetIsOpsiDataAccess</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.putTimeouts"></a>

```java
public void putTimeouts(OpsiOperationsInsightsWarehouseUserTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts">OpsiOperationsInsightsWarehouseUserTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetId"></a>

```java
public void resetId()
```

##### `resetIsEmDataAccess` <a name="resetIsEmDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetIsEmDataAccess"></a>

```java
public void resetIsEmDataAccess()
```

##### `resetIsOpsiDataAccess` <a name="resetIsOpsiDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetIsOpsiDataAccess"></a>

```java
public void resetIsOpsiDataAccess()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiOperationsInsightsWarehouseUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_operations_insights_warehouse_user.OpsiOperationsInsightsWarehouseUser;

OpsiOperationsInsightsWarehouseUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_operations_insights_warehouse_user.OpsiOperationsInsightsWarehouseUser;

OpsiOperationsInsightsWarehouseUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_operations_insights_warehouse_user.OpsiOperationsInsightsWarehouseUser;

OpsiOperationsInsightsWarehouseUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_operations_insights_warehouse_user.OpsiOperationsInsightsWarehouseUser;

OpsiOperationsInsightsWarehouseUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpsiOperationsInsightsWarehouseUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OpsiOperationsInsightsWarehouseUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpsiOperationsInsightsWarehouseUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpsiOperationsInsightsWarehouseUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OpsiOperationsInsightsWarehouseUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference">OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.connectionPasswordInput">connectionPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isAwrDataAccessInput">isAwrDataAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isEmDataAccessInput">isEmDataAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isOpsiDataAccessInput">isOpsiDataAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.operationsInsightsWarehouseIdInput">operationsInsightsWarehouseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts">OpsiOperationsInsightsWarehouseUserTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.connectionPassword">connectionPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isAwrDataAccess">isAwrDataAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isEmDataAccess">isEmDataAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isOpsiDataAccess">isOpsiDataAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.operationsInsightsWarehouseId">operationsInsightsWarehouseId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeouts"></a>

```java
public OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference">OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `connectionPasswordInput`<sup>Optional</sup> <a name="connectionPasswordInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.connectionPasswordInput"></a>

```java
public java.lang.String getConnectionPasswordInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAwrDataAccessInput`<sup>Optional</sup> <a name="isAwrDataAccessInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isAwrDataAccessInput"></a>

```java
public java.lang.Object getIsAwrDataAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEmDataAccessInput`<sup>Optional</sup> <a name="isEmDataAccessInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isEmDataAccessInput"></a>

```java
public java.lang.Object getIsEmDataAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isOpsiDataAccessInput`<sup>Optional</sup> <a name="isOpsiDataAccessInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isOpsiDataAccessInput"></a>

```java
public java.lang.Object getIsOpsiDataAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operationsInsightsWarehouseIdInput`<sup>Optional</sup> <a name="operationsInsightsWarehouseIdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.operationsInsightsWarehouseIdInput"></a>

```java
public java.lang.String getOperationsInsightsWarehouseIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts">OpsiOperationsInsightsWarehouseUserTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectionPassword`<sup>Required</sup> <a name="connectionPassword" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.connectionPassword"></a>

```java
public java.lang.String getConnectionPassword();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAwrDataAccess`<sup>Required</sup> <a name="isAwrDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isAwrDataAccess"></a>

```java
public java.lang.Object getIsAwrDataAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEmDataAccess`<sup>Required</sup> <a name="isEmDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isEmDataAccess"></a>

```java
public java.lang.Object getIsEmDataAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isOpsiDataAccess`<sup>Required</sup> <a name="isOpsiDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isOpsiDataAccess"></a>

```java
public java.lang.Object getIsOpsiDataAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operationsInsightsWarehouseId`<sup>Required</sup> <a name="operationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.operationsInsightsWarehouseId"></a>

```java
public java.lang.String getOperationsInsightsWarehouseId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiOperationsInsightsWarehouseUserConfig <a name="OpsiOperationsInsightsWarehouseUserConfig" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_operations_insights_warehouse_user.OpsiOperationsInsightsWarehouseUserConfig;

OpsiOperationsInsightsWarehouseUserConfig.builder()
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
    .connectionPassword(java.lang.String)
    .isAwrDataAccess(java.lang.Boolean)
    .isAwrDataAccess(IResolvable)
    .name(java.lang.String)
    .operationsInsightsWarehouseId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isEmDataAccess(java.lang.Boolean)
//  .isEmDataAccess(IResolvable)
//  .isOpsiDataAccess(java.lang.Boolean)
//  .isOpsiDataAccess(IResolvable)
//  .timeouts(OpsiOperationsInsightsWarehouseUserTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#compartment_id OpsiOperationsInsightsWarehouseUser#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.connectionPassword">connectionPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#connection_password OpsiOperationsInsightsWarehouseUser#connection_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.isAwrDataAccess">isAwrDataAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_awr_data_access OpsiOperationsInsightsWarehouseUser#is_awr_data_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#name OpsiOperationsInsightsWarehouseUser#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.operationsInsightsWarehouseId">operationsInsightsWarehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseUser#operations_insights_warehouse_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#defined_tags OpsiOperationsInsightsWarehouseUser#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#freeform_tags OpsiOperationsInsightsWarehouseUser#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#id OpsiOperationsInsightsWarehouseUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.isEmDataAccess">isEmDataAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_em_data_access OpsiOperationsInsightsWarehouseUser#is_em_data_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.isOpsiDataAccess">isOpsiDataAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_opsi_data_access OpsiOperationsInsightsWarehouseUser#is_opsi_data_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts">OpsiOperationsInsightsWarehouseUserTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#compartment_id OpsiOperationsInsightsWarehouseUser#compartment_id}.

---

##### `connectionPassword`<sup>Required</sup> <a name="connectionPassword" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.connectionPassword"></a>

```java
public java.lang.String getConnectionPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#connection_password OpsiOperationsInsightsWarehouseUser#connection_password}.

---

##### `isAwrDataAccess`<sup>Required</sup> <a name="isAwrDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.isAwrDataAccess"></a>

```java
public java.lang.Object getIsAwrDataAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_awr_data_access OpsiOperationsInsightsWarehouseUser#is_awr_data_access}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#name OpsiOperationsInsightsWarehouseUser#name}.

---

##### `operationsInsightsWarehouseId`<sup>Required</sup> <a name="operationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.operationsInsightsWarehouseId"></a>

```java
public java.lang.String getOperationsInsightsWarehouseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseUser#operations_insights_warehouse_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#defined_tags OpsiOperationsInsightsWarehouseUser#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#freeform_tags OpsiOperationsInsightsWarehouseUser#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#id OpsiOperationsInsightsWarehouseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEmDataAccess`<sup>Optional</sup> <a name="isEmDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.isEmDataAccess"></a>

```java
public java.lang.Object getIsEmDataAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_em_data_access OpsiOperationsInsightsWarehouseUser#is_em_data_access}.

---

##### `isOpsiDataAccess`<sup>Optional</sup> <a name="isOpsiDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.isOpsiDataAccess"></a>

```java
public java.lang.Object getIsOpsiDataAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_opsi_data_access OpsiOperationsInsightsWarehouseUser#is_opsi_data_access}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.timeouts"></a>

```java
public OpsiOperationsInsightsWarehouseUserTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts">OpsiOperationsInsightsWarehouseUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#timeouts OpsiOperationsInsightsWarehouseUser#timeouts}

---

### OpsiOperationsInsightsWarehouseUserTimeouts <a name="OpsiOperationsInsightsWarehouseUserTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_operations_insights_warehouse_user.OpsiOperationsInsightsWarehouseUserTimeouts;

OpsiOperationsInsightsWarehouseUserTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#create OpsiOperationsInsightsWarehouseUser#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#delete OpsiOperationsInsightsWarehouseUser#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#update OpsiOperationsInsightsWarehouseUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#create OpsiOperationsInsightsWarehouseUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#delete OpsiOperationsInsightsWarehouseUser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#update OpsiOperationsInsightsWarehouseUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference <a name="OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_operations_insights_warehouse_user.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference;

new OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts">OpsiOperationsInsightsWarehouseUserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts">OpsiOperationsInsightsWarehouseUserTimeouts</a>

---




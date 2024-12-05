# `databaseExadataInfrastructureCompute` Submodule <a name="`databaseExadataInfrastructureCompute` Submodule" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExadataInfrastructureCompute <a name="DatabaseExadataInfrastructureCompute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute oci_database_exadata_infrastructure_compute}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureCompute;

DatabaseExadataInfrastructureCompute.Builder.create(Construct scope, java.lang.String id)
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
    .exadataInfrastructureId(java.lang.String)
//  .activationFile(java.lang.String)
//  .additionalComputeCountComputeManagedResource(java.lang.Number)
//  .additionalComputeSystemModelComputeManagedResource(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseExadataInfrastructureComputeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#exadata_infrastructure_id DatabaseExadataInfrastructureCompute#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.activationFile">activationFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#activation_file DatabaseExadataInfrastructureCompute#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.additionalComputeCountComputeManagedResource">additionalComputeCountComputeManagedResource</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#additional_compute_count_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_count_compute_managed_resource}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.additionalComputeSystemModelComputeManagedResource">additionalComputeSystemModelComputeManagedResource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#additional_compute_system_model_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_system_model_compute_managed_resource}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#id DatabaseExadataInfrastructureCompute#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts">DatabaseExadataInfrastructureComputeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.exadataInfrastructureId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#exadata_infrastructure_id DatabaseExadataInfrastructureCompute#exadata_infrastructure_id}.

---

##### `activationFile`<sup>Optional</sup> <a name="activationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.activationFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#activation_file DatabaseExadataInfrastructureCompute#activation_file}.

---

##### `additionalComputeCountComputeManagedResource`<sup>Optional</sup> <a name="additionalComputeCountComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.additionalComputeCountComputeManagedResource"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#additional_compute_count_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_count_compute_managed_resource}.

---

##### `additionalComputeSystemModelComputeManagedResource`<sup>Optional</sup> <a name="additionalComputeSystemModelComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.additionalComputeSystemModelComputeManagedResource"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#additional_compute_system_model_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_system_model_compute_managed_resource}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#id DatabaseExadataInfrastructureCompute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts">DatabaseExadataInfrastructureComputeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#timeouts DatabaseExadataInfrastructureCompute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetActivationFile">resetActivationFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetAdditionalComputeCountComputeManagedResource">resetAdditionalComputeCountComputeManagedResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetAdditionalComputeSystemModelComputeManagedResource">resetAdditionalComputeSystemModelComputeManagedResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.putTimeouts"></a>

```java
public void putTimeouts(DatabaseExadataInfrastructureComputeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts">DatabaseExadataInfrastructureComputeTimeouts</a>

---

##### `resetActivationFile` <a name="resetActivationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetActivationFile"></a>

```java
public void resetActivationFile()
```

##### `resetAdditionalComputeCountComputeManagedResource` <a name="resetAdditionalComputeCountComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetAdditionalComputeCountComputeManagedResource"></a>

```java
public void resetAdditionalComputeCountComputeManagedResource()
```

##### `resetAdditionalComputeSystemModelComputeManagedResource` <a name="resetAdditionalComputeSystemModelComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetAdditionalComputeSystemModelComputeManagedResource"></a>

```java
public void resetAdditionalComputeSystemModelComputeManagedResource()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExadataInfrastructureCompute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureCompute;

DatabaseExadataInfrastructureCompute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureCompute;

DatabaseExadataInfrastructureCompute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureCompute;

DatabaseExadataInfrastructureCompute.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureCompute;

DatabaseExadataInfrastructureCompute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseExadataInfrastructureCompute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseExadataInfrastructureCompute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseExadataInfrastructureCompute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseExadataInfrastructureCompute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExadataInfrastructureCompute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.activatedStorageCount">activatedStorageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeCount">additionalComputeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeSystemModel">additionalComputeSystemModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalStorageCount">additionalStorageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.adminNetworkCidr">adminNetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cloudControlPlaneServer1">cloudControlPlaneServer1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cloudControlPlaneServer2">cloudControlPlaneServer2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.contacts">contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList">DatabaseExadataInfrastructureComputeContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.corporateProxy">corporateProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cpusEnabled">cpusEnabled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.createAsync">createAsync</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.csiNumber">csiNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dbServerVersion">dbServerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dnsServer">dnsServer</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.infiniBandNetworkCidr">infiniBandNetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.isCpsOfflineReportEnabled">isCpsOfflineReportEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maintenanceSloStatus">maintenanceSloStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList">DatabaseExadataInfrastructureComputeMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxCpuCount">maxCpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxDataStorageInTbs">maxDataStorageInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxDbNodeStorageInGbs">maxDbNodeStorageInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxMemoryInGbs">maxMemoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.monthlyDbServerVersion">monthlyDbServerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.netmask">netmask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.ntpServer">ntpServer</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.storageCount">storageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.storageServerVersion">storageServerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference">DatabaseExadataInfrastructureComputeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.activationFileInput">activationFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeCountComputeManagedResourceInput">additionalComputeCountComputeManagedResourceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeSystemModelComputeManagedResourceInput">additionalComputeSystemModelComputeManagedResourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.exadataInfrastructureIdInput">exadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts">DatabaseExadataInfrastructureComputeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.activationFile">activationFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeCountComputeManagedResource">additionalComputeCountComputeManagedResource</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeSystemModelComputeManagedResource">additionalComputeSystemModelComputeManagedResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `activatedStorageCount`<sup>Required</sup> <a name="activatedStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.activatedStorageCount"></a>

```java
public java.lang.Number getActivatedStorageCount();
```

- *Type:* java.lang.Number

---

##### `additionalComputeCount`<sup>Required</sup> <a name="additionalComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeCount"></a>

```java
public java.lang.Number getAdditionalComputeCount();
```

- *Type:* java.lang.Number

---

##### `additionalComputeSystemModel`<sup>Required</sup> <a name="additionalComputeSystemModel" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeSystemModel"></a>

```java
public java.lang.String getAdditionalComputeSystemModel();
```

- *Type:* java.lang.String

---

##### `additionalStorageCount`<sup>Required</sup> <a name="additionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalStorageCount"></a>

```java
public java.lang.Number getAdditionalStorageCount();
```

- *Type:* java.lang.Number

---

##### `adminNetworkCidr`<sup>Required</sup> <a name="adminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.adminNetworkCidr"></a>

```java
public java.lang.String getAdminNetworkCidr();
```

- *Type:* java.lang.String

---

##### `cloudControlPlaneServer1`<sup>Required</sup> <a name="cloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cloudControlPlaneServer1"></a>

```java
public java.lang.String getCloudControlPlaneServer1();
```

- *Type:* java.lang.String

---

##### `cloudControlPlaneServer2`<sup>Required</sup> <a name="cloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cloudControlPlaneServer2"></a>

```java
public java.lang.String getCloudControlPlaneServer2();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.contacts"></a>

```java
public DatabaseExadataInfrastructureComputeContactsList getContacts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList">DatabaseExadataInfrastructureComputeContactsList</a>

---

##### `corporateProxy`<sup>Required</sup> <a name="corporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.corporateProxy"></a>

```java
public java.lang.String getCorporateProxy();
```

- *Type:* java.lang.String

---

##### `cpusEnabled`<sup>Required</sup> <a name="cpusEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cpusEnabled"></a>

```java
public java.lang.Number getCpusEnabled();
```

- *Type:* java.lang.Number

---

##### `createAsync`<sup>Required</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.createAsync"></a>

```java
public IResolvable getCreateAsync();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `csiNumber`<sup>Required</sup> <a name="csiNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.csiNumber"></a>

```java
public java.lang.String getCsiNumber();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dbServerVersion`<sup>Required</sup> <a name="dbServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dbServerVersion"></a>

```java
public java.lang.String getDbServerVersion();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dnsServer"></a>

```java
public java.util.List<java.lang.String> getDnsServer();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `infiniBandNetworkCidr`<sup>Required</sup> <a name="infiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.infiniBandNetworkCidr"></a>

```java
public java.lang.String getInfiniBandNetworkCidr();
```

- *Type:* java.lang.String

---

##### `isCpsOfflineReportEnabled`<sup>Required</sup> <a name="isCpsOfflineReportEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.isCpsOfflineReportEnabled"></a>

```java
public IResolvable getIsCpsOfflineReportEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `maintenanceSloStatus`<sup>Required</sup> <a name="maintenanceSloStatus" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maintenanceSloStatus"></a>

```java
public java.lang.String getMaintenanceSloStatus();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maintenanceWindow"></a>

```java
public DatabaseExadataInfrastructureComputeMaintenanceWindowList getMaintenanceWindow();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList">DatabaseExadataInfrastructureComputeMaintenanceWindowList</a>

---

##### `maxCpuCount`<sup>Required</sup> <a name="maxCpuCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxCpuCount"></a>

```java
public java.lang.Number getMaxCpuCount();
```

- *Type:* java.lang.Number

---

##### `maxDataStorageInTbs`<sup>Required</sup> <a name="maxDataStorageInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxDataStorageInTbs"></a>

```java
public java.lang.Number getMaxDataStorageInTbs();
```

- *Type:* java.lang.Number

---

##### `maxDbNodeStorageInGbs`<sup>Required</sup> <a name="maxDbNodeStorageInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxDbNodeStorageInGbs"></a>

```java
public java.lang.Number getMaxDbNodeStorageInGbs();
```

- *Type:* java.lang.Number

---

##### `maxMemoryInGbs`<sup>Required</sup> <a name="maxMemoryInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxMemoryInGbs"></a>

```java
public java.lang.Number getMaxMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `monthlyDbServerVersion`<sup>Required</sup> <a name="monthlyDbServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.monthlyDbServerVersion"></a>

```java
public java.lang.String getMonthlyDbServerVersion();
```

- *Type:* java.lang.String

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

---

##### `ntpServer`<sup>Required</sup> <a name="ntpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.ntpServer"></a>

```java
public java.util.List<java.lang.String> getNtpServer();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.storageCount"></a>

```java
public java.lang.Number getStorageCount();
```

- *Type:* java.lang.Number

---

##### `storageServerVersion`<sup>Required</sup> <a name="storageServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.storageServerVersion"></a>

```java
public java.lang.String getStorageServerVersion();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeouts"></a>

```java
public DatabaseExadataInfrastructureComputeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference">DatabaseExadataInfrastructureComputeTimeoutsOutputReference</a>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `activationFileInput`<sup>Optional</sup> <a name="activationFileInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.activationFileInput"></a>

```java
public java.lang.String getActivationFileInput();
```

- *Type:* java.lang.String

---

##### `additionalComputeCountComputeManagedResourceInput`<sup>Optional</sup> <a name="additionalComputeCountComputeManagedResourceInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeCountComputeManagedResourceInput"></a>

```java
public java.lang.Number getAdditionalComputeCountComputeManagedResourceInput();
```

- *Type:* java.lang.Number

---

##### `additionalComputeSystemModelComputeManagedResourceInput`<sup>Optional</sup> <a name="additionalComputeSystemModelComputeManagedResourceInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeSystemModelComputeManagedResourceInput"></a>

```java
public java.lang.String getAdditionalComputeSystemModelComputeManagedResourceInput();
```

- *Type:* java.lang.String

---

##### `exadataInfrastructureIdInput`<sup>Optional</sup> <a name="exadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.exadataInfrastructureIdInput"></a>

```java
public java.lang.String getExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts">DatabaseExadataInfrastructureComputeTimeouts</a>

---

##### `activationFile`<sup>Required</sup> <a name="activationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.activationFile"></a>

```java
public java.lang.String getActivationFile();
```

- *Type:* java.lang.String

---

##### `additionalComputeCountComputeManagedResource`<sup>Required</sup> <a name="additionalComputeCountComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeCountComputeManagedResource"></a>

```java
public java.lang.Number getAdditionalComputeCountComputeManagedResource();
```

- *Type:* java.lang.Number

---

##### `additionalComputeSystemModelComputeManagedResource`<sup>Required</sup> <a name="additionalComputeSystemModelComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeSystemModelComputeManagedResource"></a>

```java
public java.lang.String getAdditionalComputeSystemModelComputeManagedResource();
```

- *Type:* java.lang.String

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExadataInfrastructureComputeConfig <a name="DatabaseExadataInfrastructureComputeConfig" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeConfig;

DatabaseExadataInfrastructureComputeConfig.builder()
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
    .exadataInfrastructureId(java.lang.String)
//  .activationFile(java.lang.String)
//  .additionalComputeCountComputeManagedResource(java.lang.Number)
//  .additionalComputeSystemModelComputeManagedResource(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseExadataInfrastructureComputeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#exadata_infrastructure_id DatabaseExadataInfrastructureCompute#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.activationFile">activationFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#activation_file DatabaseExadataInfrastructureCompute#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.additionalComputeCountComputeManagedResource">additionalComputeCountComputeManagedResource</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#additional_compute_count_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_count_compute_managed_resource}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.additionalComputeSystemModelComputeManagedResource">additionalComputeSystemModelComputeManagedResource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#additional_compute_system_model_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_system_model_compute_managed_resource}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#id DatabaseExadataInfrastructureCompute#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts">DatabaseExadataInfrastructureComputeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#exadata_infrastructure_id DatabaseExadataInfrastructureCompute#exadata_infrastructure_id}.

---

##### `activationFile`<sup>Optional</sup> <a name="activationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.activationFile"></a>

```java
public java.lang.String getActivationFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#activation_file DatabaseExadataInfrastructureCompute#activation_file}.

---

##### `additionalComputeCountComputeManagedResource`<sup>Optional</sup> <a name="additionalComputeCountComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.additionalComputeCountComputeManagedResource"></a>

```java
public java.lang.Number getAdditionalComputeCountComputeManagedResource();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#additional_compute_count_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_count_compute_managed_resource}.

---

##### `additionalComputeSystemModelComputeManagedResource`<sup>Optional</sup> <a name="additionalComputeSystemModelComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.additionalComputeSystemModelComputeManagedResource"></a>

```java
public java.lang.String getAdditionalComputeSystemModelComputeManagedResource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#additional_compute_system_model_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_system_model_compute_managed_resource}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#id DatabaseExadataInfrastructureCompute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.timeouts"></a>

```java
public DatabaseExadataInfrastructureComputeTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts">DatabaseExadataInfrastructureComputeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#timeouts DatabaseExadataInfrastructureCompute#timeouts}

---

### DatabaseExadataInfrastructureComputeContacts <a name="DatabaseExadataInfrastructureComputeContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeContacts;

DatabaseExadataInfrastructureComputeContacts.builder()
    .build();
```


### DatabaseExadataInfrastructureComputeMaintenanceWindow <a name="DatabaseExadataInfrastructureComputeMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeMaintenanceWindow;

DatabaseExadataInfrastructureComputeMaintenanceWindow.builder()
    .build();
```


### DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek;

DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek.builder()
    .build();
```


### DatabaseExadataInfrastructureComputeMaintenanceWindowMonths <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonths;

DatabaseExadataInfrastructureComputeMaintenanceWindowMonths.builder()
    .build();
```


### DatabaseExadataInfrastructureComputeTimeouts <a name="DatabaseExadataInfrastructureComputeTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeTimeouts;

DatabaseExadataInfrastructureComputeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#create DatabaseExadataInfrastructureCompute#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#delete DatabaseExadataInfrastructureCompute#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#update DatabaseExadataInfrastructureCompute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#create DatabaseExadataInfrastructureCompute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#delete DatabaseExadataInfrastructureCompute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#update DatabaseExadataInfrastructureCompute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExadataInfrastructureComputeContactsList <a name="DatabaseExadataInfrastructureComputeContactsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeContactsList;

new DatabaseExadataInfrastructureComputeContactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.get"></a>

```java
public DatabaseExadataInfrastructureComputeContactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseExadataInfrastructureComputeContactsOutputReference <a name="DatabaseExadataInfrastructureComputeContactsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeContactsOutputReference;

new DatabaseExadataInfrastructureComputeContactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.isContactMosValidated">isContactMosValidated</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.isPrimary">isPrimary</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContacts">DatabaseExadataInfrastructureComputeContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `isContactMosValidated`<sup>Required</sup> <a name="isContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.isContactMosValidated"></a>

```java
public IResolvable getIsContactMosValidated();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.isPrimary"></a>

```java
public IResolvable getIsPrimary();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.internalValue"></a>

```java
public DatabaseExadataInfrastructureComputeContacts getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContacts">DatabaseExadataInfrastructureComputeContacts</a>

---


### DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList;

new DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.get"></a>

```java
public DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference;

new DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```java
public DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek</a>

---


### DatabaseExadataInfrastructureComputeMaintenanceWindowList <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeMaintenanceWindowList;

new DatabaseExadataInfrastructureComputeMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.get"></a>

```java
public DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList;

new DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.get"></a>

```java
public DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference;

new DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonths">DatabaseExadataInfrastructureComputeMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```java
public DatabaseExadataInfrastructureComputeMaintenanceWindowMonths getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonths">DatabaseExadataInfrastructureComputeMaintenanceWindowMonths</a>

---


### DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference;

new DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList">DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindow">DatabaseExadataInfrastructureComputeMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```java
public DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList getDaysOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```java
public IResolvable getIsCustomActionTimeoutEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```java
public IResolvable getIsMonthlyPatchingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.months"></a>

```java
public DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList getMonths();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList">DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList</a>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public DatabaseExadataInfrastructureComputeMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindow">DatabaseExadataInfrastructureComputeMaintenanceWindow</a>

---


### DatabaseExadataInfrastructureComputeTimeoutsOutputReference <a name="DatabaseExadataInfrastructureComputeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_compute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference;

new DatabaseExadataInfrastructureComputeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts">DatabaseExadataInfrastructureComputeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts">DatabaseExadataInfrastructureComputeTimeouts</a>

---




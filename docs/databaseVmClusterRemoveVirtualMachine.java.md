# `databaseVmClusterRemoveVirtualMachine` Submodule <a name="`databaseVmClusterRemoveVirtualMachine` Submodule" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseVmClusterRemoveVirtualMachine <a name="DatabaseVmClusterRemoveVirtualMachine" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine oci_database_vm_cluster_remove_virtual_machine}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachine;

DatabaseVmClusterRemoveVirtualMachine.Builder.create(Construct scope, java.lang.String id)
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
    .dbServers(IResolvable)
    .dbServers(java.util.List<DatabaseVmClusterRemoveVirtualMachineDbServers>)
    .vmClusterId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseVmClusterRemoveVirtualMachineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.dbServers">dbServers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>></code> | db_servers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#vm_cluster_id DatabaseVmClusterRemoveVirtualMachine#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#id DatabaseVmClusterRemoveVirtualMachine#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.dbServers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>>

db_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#db_servers DatabaseVmClusterRemoveVirtualMachine#db_servers}

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.vmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#vm_cluster_id DatabaseVmClusterRemoveVirtualMachine#vm_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#id DatabaseVmClusterRemoveVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#timeouts DatabaseVmClusterRemoveVirtualMachine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putDbServers">putDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDbServers` <a name="putDbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putDbServers"></a>

```java
public void putDbServers(IResolvable OR java.util.List<DatabaseVmClusterRemoveVirtualMachineDbServers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putDbServers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putTimeouts"></a>

```java
public void putTimeouts(DatabaseVmClusterRemoveVirtualMachineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseVmClusterRemoveVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachine;

DatabaseVmClusterRemoveVirtualMachine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachine;

DatabaseVmClusterRemoveVirtualMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachine;

DatabaseVmClusterRemoveVirtualMachine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachine;

DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseVmClusterRemoveVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseVmClusterRemoveVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseVmClusterRemoveVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseVmClusterRemoveVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cloudAutomationUpdateDetails">cloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cpusEnabled">cpusEnabled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList">DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbServers">dbServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList">DatabaseVmClusterRemoveVirtualMachineDbServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.fileSystemConfigurationDetails">fileSystemConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList">DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.giVersion">giVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lastPatchHistoryEntryId">lastPatchHistoryEntryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference">DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterNetworkId">vmClusterNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbServersInput">dbServersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterIdInput">vmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `cloudAutomationUpdateDetails`<sup>Required</sup> <a name="cloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cloudAutomationUpdateDetails"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList getCloudAutomationUpdateDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `cpusEnabled`<sup>Required</sup> <a name="cpusEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cpusEnabled"></a>

```java
public java.lang.Number getCpusEnabled();
```

- *Type:* java.lang.Number

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dataCollectionOptions"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList">DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList</a>

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbServers"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineDbServersList getDbServers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList">DatabaseVmClusterRemoveVirtualMachineDbServersList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `fileSystemConfigurationDetails`<sup>Required</sup> <a name="fileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.fileSystemConfigurationDetails"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList getFileSystemConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList">DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.giVersion"></a>

```java
public java.lang.String getGiVersion();
```

- *Type:* java.lang.String

---

##### `isLocalBackupEnabled`<sup>Required</sup> <a name="isLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.isLocalBackupEnabled"></a>

```java
public IResolvable getIsLocalBackupEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isSparseDiskgroupEnabled`<sup>Required</sup> <a name="isSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.isSparseDiskgroupEnabled"></a>

```java
public IResolvable getIsSparseDiskgroupEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastPatchHistoryEntryId`<sup>Required</sup> <a name="lastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lastPatchHistoryEntryId"></a>

```java
public java.lang.String getLastPatchHistoryEntryId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.systemVersion"></a>

```java
public java.lang.String getSystemVersion();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeouts"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference">DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference</a>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `vmClusterNetworkId`<sup>Required</sup> <a name="vmClusterNetworkId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterNetworkId"></a>

```java
public java.lang.String getVmClusterNetworkId();
```

- *Type:* java.lang.String

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbServersInput"></a>

```java
public java.lang.Object getDbServersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a>

---

##### `vmClusterIdInput`<sup>Optional</sup> <a name="vmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterIdInput"></a>

```java
public java.lang.String getVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterId"></a>

```java
public java.lang.String getVmClusterId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails;

DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails.builder()
    .build();
```


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference;

DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference.builder()
    .build();
```


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod;

DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod.builder()
    .build();
```


### DatabaseVmClusterRemoveVirtualMachineConfig <a name="DatabaseVmClusterRemoveVirtualMachineConfig" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineConfig;

DatabaseVmClusterRemoveVirtualMachineConfig.builder()
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
    .dbServers(IResolvable)
    .dbServers(java.util.List<DatabaseVmClusterRemoveVirtualMachineDbServers>)
    .vmClusterId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseVmClusterRemoveVirtualMachineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.dbServers">dbServers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>></code> | db_servers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#vm_cluster_id DatabaseVmClusterRemoveVirtualMachine#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#id DatabaseVmClusterRemoveVirtualMachine#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.dbServers"></a>

```java
public java.lang.Object getDbServers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>>

db_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#db_servers DatabaseVmClusterRemoveVirtualMachine#db_servers}

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.vmClusterId"></a>

```java
public java.lang.String getVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#vm_cluster_id DatabaseVmClusterRemoveVirtualMachine#vm_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#id DatabaseVmClusterRemoveVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.timeouts"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#timeouts DatabaseVmClusterRemoveVirtualMachine#timeouts}

---

### DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions <a name="DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions;

DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions.builder()
    .build();
```


### DatabaseVmClusterRemoveVirtualMachineDbServers <a name="DatabaseVmClusterRemoveVirtualMachineDbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineDbServers;

DatabaseVmClusterRemoveVirtualMachineDbServers.builder()
    .dbServerId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers.property.dbServerId">dbServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#db_server_id DatabaseVmClusterRemoveVirtualMachine#db_server_id}. |

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers.property.dbServerId"></a>

```java
public java.lang.String getDbServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#db_server_id DatabaseVmClusterRemoveVirtualMachine#db_server_id}.

---

### DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails <a name="DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails;

DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails.builder()
    .build();
```


### DatabaseVmClusterRemoveVirtualMachineTimeouts <a name="DatabaseVmClusterRemoveVirtualMachineTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineTimeouts;

DatabaseVmClusterRemoveVirtualMachineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#create DatabaseVmClusterRemoveVirtualMachine#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#delete DatabaseVmClusterRemoveVirtualMachine#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#update DatabaseVmClusterRemoveVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#create DatabaseVmClusterRemoveVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#delete DatabaseVmClusterRemoveVirtualMachine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#update DatabaseVmClusterRemoveVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">applyUpdatePreferredEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">applyUpdatePreferredStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredEndTime`<sup>Required</sup> <a name="applyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```java
public java.lang.String getApplyUpdatePreferredEndTime();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredStartTime`<sup>Required</sup> <a name="applyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```java
public java.lang.String getApplyUpdatePreferredStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.get"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">freezePeriodEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">freezePeriodStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `freezePeriodEndTime`<sup>Required</sup> <a name="freezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```java
public java.lang.String getFreezePeriodEndTime();
```

- *Type:* java.lang.String

---

##### `freezePeriodStartTime`<sup>Required</sup> <a name="freezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```java
public java.lang.String getFreezePeriodStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.get"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">applyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">freezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">isEarlyAdoptionEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">isFreezePeriodEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyUpdateTimePreference`<sup>Required</sup> <a name="applyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList getApplyUpdateTimePreference();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a>

---

##### `freezePeriod`<sup>Required</sup> <a name="freezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList getFreezePeriod();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList</a>

---

##### `isEarlyAdoptionEnabled`<sup>Required</sup> <a name="isEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```java
public IResolvable getIsEarlyAdoptionEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isFreezePeriodEnabled`<sup>Required</sup> <a name="isFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```java
public IResolvable getIsFreezePeriodEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails</a>

---


### DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList <a name="DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList;

new DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.get"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference;

new DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions">DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public IResolvable getIsDiagnosticsEventsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```java
public IResolvable getIsHealthMonitoringEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public IResolvable getIsIncidentLogsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions">DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions</a>

---


### DatabaseVmClusterRemoveVirtualMachineDbServersList <a name="DatabaseVmClusterRemoveVirtualMachineDbServersList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineDbServersList;

new DatabaseVmClusterRemoveVirtualMachineDbServersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.get"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>>

---


### DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference;

new DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.dbServerIdInput">dbServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.dbServerId">dbServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbServerIdInput`<sup>Optional</sup> <a name="dbServerIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.dbServerIdInput"></a>

```java
public java.lang.String getDbServerIdInput();
```

- *Type:* java.lang.String

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.dbServerId"></a>

```java
public java.lang.String getDbServerId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>

---


### DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList <a name="DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList;

new DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.get"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference;

new DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">fileSystemSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails">DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemSizeGb`<sup>Required</sup> <a name="fileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```java
public java.lang.Number getFileSystemSizeGb();
```

- *Type:* java.lang.Number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails">DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails</a>

---


### DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_remove_virtual_machine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference;

new DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a>

---




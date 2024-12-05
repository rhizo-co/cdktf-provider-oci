# `databaseVmClusterAddVirtualMachine` Submodule <a name="`databaseVmClusterAddVirtualMachine` Submodule" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseVmClusterAddVirtualMachine <a name="DatabaseVmClusterAddVirtualMachine" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine oci_database_vm_cluster_add_virtual_machine}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachine;

DatabaseVmClusterAddVirtualMachine.Builder.create(Construct scope, java.lang.String id)
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
    .dbServers(java.util.List<DatabaseVmClusterAddVirtualMachineDbServers>)
    .vmClusterId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseVmClusterAddVirtualMachineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.dbServers">dbServers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers">DatabaseVmClusterAddVirtualMachineDbServers</a>></code> | db_servers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#vm_cluster_id DatabaseVmClusterAddVirtualMachine#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#id DatabaseVmClusterAddVirtualMachine#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts">DatabaseVmClusterAddVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.dbServers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers">DatabaseVmClusterAddVirtualMachineDbServers</a>>

db_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#db_servers DatabaseVmClusterAddVirtualMachine#db_servers}

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.vmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#vm_cluster_id DatabaseVmClusterAddVirtualMachine#vm_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#id DatabaseVmClusterAddVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts">DatabaseVmClusterAddVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#timeouts DatabaseVmClusterAddVirtualMachine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.putDbServers">putDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDbServers` <a name="putDbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.putDbServers"></a>

```java
public void putDbServers(IResolvable OR java.util.List<DatabaseVmClusterAddVirtualMachineDbServers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.putDbServers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers">DatabaseVmClusterAddVirtualMachineDbServers</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.putTimeouts"></a>

```java
public void putTimeouts(DatabaseVmClusterAddVirtualMachineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts">DatabaseVmClusterAddVirtualMachineTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseVmClusterAddVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachine;

DatabaseVmClusterAddVirtualMachine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachine;

DatabaseVmClusterAddVirtualMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachine;

DatabaseVmClusterAddVirtualMachine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachine;

DatabaseVmClusterAddVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseVmClusterAddVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseVmClusterAddVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseVmClusterAddVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseVmClusterAddVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseVmClusterAddVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.cloudAutomationUpdateDetails">cloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList">DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.cpusEnabled">cpusEnabled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList">DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dbServers">dbServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList">DatabaseVmClusterAddVirtualMachineDbServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.fileSystemConfigurationDetails">fileSystemConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList">DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.giVersion">giVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.lastPatchHistoryEntryId">lastPatchHistoryEntryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.ocpusEnabled">ocpusEnabled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference">DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.vmClusterNetworkId">vmClusterNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dbServersInput">dbServersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers">DatabaseVmClusterAddVirtualMachineDbServers</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts">DatabaseVmClusterAddVirtualMachineTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.vmClusterIdInput">vmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `cloudAutomationUpdateDetails`<sup>Required</sup> <a name="cloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.cloudAutomationUpdateDetails"></a>

```java
public DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList getCloudAutomationUpdateDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList">DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `cpusEnabled`<sup>Required</sup> <a name="cpusEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.cpusEnabled"></a>

```java
public java.lang.Number getCpusEnabled();
```

- *Type:* java.lang.Number

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dataCollectionOptions"></a>

```java
public DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList">DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList</a>

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dbServers"></a>

```java
public DatabaseVmClusterAddVirtualMachineDbServersList getDbServers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList">DatabaseVmClusterAddVirtualMachineDbServersList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `fileSystemConfigurationDetails`<sup>Required</sup> <a name="fileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.fileSystemConfigurationDetails"></a>

```java
public DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList getFileSystemConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList">DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.giVersion"></a>

```java
public java.lang.String getGiVersion();
```

- *Type:* java.lang.String

---

##### `isLocalBackupEnabled`<sup>Required</sup> <a name="isLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.isLocalBackupEnabled"></a>

```java
public IResolvable getIsLocalBackupEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isSparseDiskgroupEnabled`<sup>Required</sup> <a name="isSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.isSparseDiskgroupEnabled"></a>

```java
public IResolvable getIsSparseDiskgroupEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastPatchHistoryEntryId`<sup>Required</sup> <a name="lastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.lastPatchHistoryEntryId"></a>

```java
public java.lang.String getLastPatchHistoryEntryId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpusEnabled`<sup>Required</sup> <a name="ocpusEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.ocpusEnabled"></a>

```java
public java.lang.Number getOcpusEnabled();
```

- *Type:* java.lang.Number

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.systemVersion"></a>

```java
public java.lang.String getSystemVersion();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.timeouts"></a>

```java
public DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference">DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference</a>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `vmClusterNetworkId`<sup>Required</sup> <a name="vmClusterNetworkId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.vmClusterNetworkId"></a>

```java
public java.lang.String getVmClusterNetworkId();
```

- *Type:* java.lang.String

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.dbServersInput"></a>

```java
public java.lang.Object getDbServersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers">DatabaseVmClusterAddVirtualMachineDbServers</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts">DatabaseVmClusterAddVirtualMachineTimeouts</a>

---

##### `vmClusterIdInput`<sup>Optional</sup> <a name="vmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.vmClusterIdInput"></a>

```java
public java.lang.String getVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.vmClusterId"></a>

```java
public java.lang.String getVmClusterId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetails <a name="DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetails;

DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetails.builder()
    .build();
```


### DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference;

DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference.builder()
    .build();
```


### DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriod <a name="DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriod;

DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriod.builder()
    .build();
```


### DatabaseVmClusterAddVirtualMachineConfig <a name="DatabaseVmClusterAddVirtualMachineConfig" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineConfig;

DatabaseVmClusterAddVirtualMachineConfig.builder()
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
    .dbServers(java.util.List<DatabaseVmClusterAddVirtualMachineDbServers>)
    .vmClusterId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseVmClusterAddVirtualMachineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.dbServers">dbServers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers">DatabaseVmClusterAddVirtualMachineDbServers</a>></code> | db_servers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#vm_cluster_id DatabaseVmClusterAddVirtualMachine#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#id DatabaseVmClusterAddVirtualMachine#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts">DatabaseVmClusterAddVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.dbServers"></a>

```java
public java.lang.Object getDbServers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers">DatabaseVmClusterAddVirtualMachineDbServers</a>>

db_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#db_servers DatabaseVmClusterAddVirtualMachine#db_servers}

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.vmClusterId"></a>

```java
public java.lang.String getVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#vm_cluster_id DatabaseVmClusterAddVirtualMachine#vm_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#id DatabaseVmClusterAddVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineConfig.property.timeouts"></a>

```java
public DatabaseVmClusterAddVirtualMachineTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts">DatabaseVmClusterAddVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#timeouts DatabaseVmClusterAddVirtualMachine#timeouts}

---

### DatabaseVmClusterAddVirtualMachineDataCollectionOptions <a name="DatabaseVmClusterAddVirtualMachineDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineDataCollectionOptions;

DatabaseVmClusterAddVirtualMachineDataCollectionOptions.builder()
    .build();
```


### DatabaseVmClusterAddVirtualMachineDbServers <a name="DatabaseVmClusterAddVirtualMachineDbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineDbServers;

DatabaseVmClusterAddVirtualMachineDbServers.builder()
    .dbServerId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers.property.dbServerId">dbServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#db_server_id DatabaseVmClusterAddVirtualMachine#db_server_id}. |

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers.property.dbServerId"></a>

```java
public java.lang.String getDbServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#db_server_id DatabaseVmClusterAddVirtualMachine#db_server_id}.

---

### DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetails <a name="DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetails;

DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetails.builder()
    .build();
```


### DatabaseVmClusterAddVirtualMachineTimeouts <a name="DatabaseVmClusterAddVirtualMachineTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineTimeouts;

DatabaseVmClusterAddVirtualMachineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#create DatabaseVmClusterAddVirtualMachine#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#delete DatabaseVmClusterAddVirtualMachine#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#update DatabaseVmClusterAddVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#create DatabaseVmClusterAddVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#delete DatabaseVmClusterAddVirtualMachine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_add_virtual_machine#update DatabaseVmClusterAddVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList <a name="DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList;

new DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get"></a>

```java
public DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference;

new DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">applyUpdatePreferredEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">applyUpdatePreferredStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredEndTime`<sup>Required</sup> <a name="applyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```java
public java.lang.String getApplyUpdatePreferredEndTime();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredStartTime`<sup>Required</sup> <a name="applyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```java
public java.lang.String getApplyUpdatePreferredStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList <a name="DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList;

new DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.get"></a>

```java
public DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference;

new DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">freezePeriodEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">freezePeriodStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `freezePeriodEndTime`<sup>Required</sup> <a name="freezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```java
public java.lang.String getFreezePeriodEndTime();
```

- *Type:* java.lang.String

---

##### `freezePeriodStartTime`<sup>Required</sup> <a name="freezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```java
public java.lang.String getFreezePeriodStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriod getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList <a name="DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList;

new DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.get"></a>

```java
public DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference <a name="DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference;

new DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">applyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">freezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList">DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">isEarlyAdoptionEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">isFreezePeriodEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetails">DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyUpdateTimePreference`<sup>Required</sup> <a name="applyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```java
public DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList getApplyUpdateTimePreference();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a>

---

##### `freezePeriod`<sup>Required</sup> <a name="freezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```java
public DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList getFreezePeriod();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList">DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList</a>

---

##### `isEarlyAdoptionEnabled`<sup>Required</sup> <a name="isEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```java
public IResolvable getIsEarlyAdoptionEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isFreezePeriodEnabled`<sup>Required</sup> <a name="isFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```java
public IResolvable getIsFreezePeriodEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetails">DatabaseVmClusterAddVirtualMachineCloudAutomationUpdateDetails</a>

---


### DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList <a name="DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList;

new DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.get"></a>

```java
public DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference <a name="DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference;

new DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptions">DatabaseVmClusterAddVirtualMachineDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public IResolvable getIsDiagnosticsEventsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```java
public IResolvable getIsHealthMonitoringEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public IResolvable getIsIncidentLogsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterAddVirtualMachineDataCollectionOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDataCollectionOptions">DatabaseVmClusterAddVirtualMachineDataCollectionOptions</a>

---


### DatabaseVmClusterAddVirtualMachineDbServersList <a name="DatabaseVmClusterAddVirtualMachineDbServersList" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineDbServersList;

new DatabaseVmClusterAddVirtualMachineDbServersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.get"></a>

```java
public DatabaseVmClusterAddVirtualMachineDbServersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers">DatabaseVmClusterAddVirtualMachineDbServers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers">DatabaseVmClusterAddVirtualMachineDbServers</a>>

---


### DatabaseVmClusterAddVirtualMachineDbServersOutputReference <a name="DatabaseVmClusterAddVirtualMachineDbServersOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference;

new DatabaseVmClusterAddVirtualMachineDbServersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.property.dbServerIdInput">dbServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.property.dbServerId">dbServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers">DatabaseVmClusterAddVirtualMachineDbServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbServerIdInput`<sup>Optional</sup> <a name="dbServerIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.property.dbServerIdInput"></a>

```java
public java.lang.String getDbServerIdInput();
```

- *Type:* java.lang.String

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.property.dbServerId"></a>

```java
public java.lang.String getDbServerId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineDbServers">DatabaseVmClusterAddVirtualMachineDbServers</a>

---


### DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList <a name="DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList;

new DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.get"></a>

```java
public DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference <a name="DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference;

new DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">fileSystemSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetails">DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemSizeGb`<sup>Required</sup> <a name="fileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```java
public java.lang.Number getFileSystemSizeGb();
```

- *Type:* java.lang.Number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetails">DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetails</a>

---


### DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference <a name="DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_add_virtual_machine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference;

new DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts">DatabaseVmClusterAddVirtualMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterAddVirtualMachine.DatabaseVmClusterAddVirtualMachineTimeouts">DatabaseVmClusterAddVirtualMachineTimeouts</a>

---




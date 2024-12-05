# `dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation` Submodule <a name="`dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_association oci_database_autonomous_container_database_dataguard_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation(scope: Construct, id: string, config: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyLag">applyLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyRate">applyRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSeconds">fastStartFailOverLagLimitInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabled">isAutomaticFailoverEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfig">peerAutonomousContainerDatabaseBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentId">peerAutonomousContainerDatabaseCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDataguardAssociationId">peerAutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayName">peerAutonomousContainerDatabaseDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseId">peerAutonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterId">peerAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueName">peerDbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerLifecycleState">peerLifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerRole">peerRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionMode">protectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDays">standbyMaintenanceBufferInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastRoleChanged">timeLastRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastSynced">timeLastSynced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.transportLag">transportLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationIdInput">autonomousContainerDatabaseDataguardAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseIdInput">autonomousContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationId">autonomousContainerDatabaseDataguardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `applyLag`<sup>Required</sup> <a name="applyLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyLag"></a>

```typescript
public readonly applyLag: string;
```

- *Type:* string

---

##### `applyRate`<sup>Required</sup> <a name="applyRate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyRate"></a>

```typescript
public readonly applyRate: string;
```

- *Type:* string

---

##### `fastStartFailOverLagLimitInSeconds`<sup>Required</sup> <a name="fastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSeconds"></a>

```typescript
public readonly fastStartFailOverLagLimitInSeconds: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutomaticFailoverEnabled`<sup>Required</sup> <a name="isAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabled"></a>

```typescript
public readonly isAutomaticFailoverEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseBackupConfig`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```typescript
public readonly peerAutonomousContainerDatabaseBackupConfig: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList</a>

---

##### `peerAutonomousContainerDatabaseCompartmentId`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```typescript
public readonly peerAutonomousContainerDatabaseCompartmentId: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDataguardAssociationId"></a>

```typescript
public readonly peerAutonomousContainerDatabaseDataguardAssociationId: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseDisplayName`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayName"></a>

```typescript
public readonly peerAutonomousContainerDatabaseDisplayName: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseId`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseId"></a>

```typescript
public readonly peerAutonomousContainerDatabaseId: string;
```

- *Type:* string

---

##### `peerAutonomousVmClusterId`<sup>Required</sup> <a name="peerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterId"></a>

```typescript
public readonly peerAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `peerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterId"></a>

```typescript
public readonly peerCloudAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `peerDbUniqueName`<sup>Required</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueName"></a>

```typescript
public readonly peerDbUniqueName: string;
```

- *Type:* string

---

##### `peerLifecycleState`<sup>Required</sup> <a name="peerLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerLifecycleState"></a>

```typescript
public readonly peerLifecycleState: string;
```

- *Type:* string

---

##### `peerRole`<sup>Required</sup> <a name="peerRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerRole"></a>

```typescript
public readonly peerRole: string;
```

- *Type:* string

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionMode"></a>

```typescript
public readonly protectionMode: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `standbyMaintenanceBufferInDays`<sup>Required</sup> <a name="standbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDays"></a>

```typescript
public readonly standbyMaintenanceBufferInDays: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastRoleChanged`<sup>Required</sup> <a name="timeLastRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastRoleChanged"></a>

```typescript
public readonly timeLastRoleChanged: string;
```

- *Type:* string

---

##### `timeLastSynced`<sup>Required</sup> <a name="timeLastSynced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastSynced"></a>

```typescript
public readonly timeLastSynced: string;
```

- *Type:* string

---

##### `transportLag`<sup>Required</sup> <a name="transportLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.transportLag"></a>

```typescript
public readonly transportLag: string;
```

- *Type:* string

---

##### `autonomousContainerDatabaseDataguardAssociationIdInput`<sup>Optional</sup> <a name="autonomousContainerDatabaseDataguardAssociationIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationIdInput"></a>

```typescript
public readonly autonomousContainerDatabaseDataguardAssociationIdInput: string;
```

- *Type:* string

---

##### `autonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="autonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseIdInput"></a>

```typescript
public readonly autonomousContainerDatabaseIdInput: string;
```

- *Type:* string

---

##### `autonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="autonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```typescript
public readonly autonomousContainerDatabaseDataguardAssociationId: string;
```

- *Type:* string

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig: dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseDataguardAssociationId">autonomousContainerDatabaseDataguardAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_association#autonomous_container_database_dataguard_association_id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_association#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="autonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```typescript
public readonly autonomousContainerDatabaseDataguardAssociationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_association#autonomous_container_database_dataguard_association_id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_dataguard_association_id}.

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_association#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_id}.

---

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig: dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails: dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">dbrsPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">internetProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">vpcPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpcUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbrsPolicyId`<sup>Required</sup> <a name="dbrsPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```typescript
public readonly dbrsPolicyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internetProxy`<sup>Required</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```typescript
public readonly internetProxy: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcPassword`<sup>Required</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```typescript
public readonly vpcPassword: string;
```

- *Type:* string

---

##### `vpcUser`<sup>Required</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```typescript
public readonly vpcUser: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails"></a>

```typescript
public readonly backupDestinationDetails: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a>

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociation.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a>

---




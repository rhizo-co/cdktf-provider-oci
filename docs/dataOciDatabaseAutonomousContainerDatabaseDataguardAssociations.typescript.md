# `dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations` Submodule <a name="`dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations oci_database_autonomous_container_database_dataguard_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations(scope: Construct, id: string, config: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseDataguardAssociations">autonomousContainerDatabaseDataguardAssociations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseIdInput">autonomousContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomousContainerDatabaseDataguardAssociations`<sup>Required</sup> <a name="autonomousContainerDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseDataguardAssociations"></a>

```typescript
public readonly autonomousContainerDatabaseDataguardAssociations: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList</a>

---

##### `autonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="autonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseIdInput"></a>

```typescript
public readonly autonomousContainerDatabaseIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations: dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig: dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails: dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig: dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#autonomous_container_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#filter DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter: dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#name DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#values DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#regex DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#name DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#values DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#regex DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.applyLag">applyLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.applyRate">applyRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.autonomousContainerDatabaseDataguardAssociationId">autonomousContainerDatabaseDataguardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.fastStartFailOverLagLimitInSeconds">fastStartFailOverLagLimitInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.isAutomaticFailoverEnabled">isAutomaticFailoverEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseBackupConfig">peerAutonomousContainerDatabaseBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseCompartmentId">peerAutonomousContainerDatabaseCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseDataguardAssociationId">peerAutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseDisplayName">peerAutonomousContainerDatabaseDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseId">peerAutonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousVmClusterId">peerAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerDbUniqueName">peerDbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerLifecycleState">peerLifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerRole">peerRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.protectionMode">protectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.standbyMaintenanceBufferInDays">standbyMaintenanceBufferInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeLastRoleChanged">timeLastRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeLastSynced">timeLastSynced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.transportLag">transportLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyLag`<sup>Required</sup> <a name="applyLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.applyLag"></a>

```typescript
public readonly applyLag: string;
```

- *Type:* string

---

##### `applyRate`<sup>Required</sup> <a name="applyRate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.applyRate"></a>

```typescript
public readonly applyRate: string;
```

- *Type:* string

---

##### `autonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="autonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```typescript
public readonly autonomousContainerDatabaseDataguardAssociationId: string;
```

- *Type:* string

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

---

##### `fastStartFailOverLagLimitInSeconds`<sup>Required</sup> <a name="fastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.fastStartFailOverLagLimitInSeconds"></a>

```typescript
public readonly fastStartFailOverLagLimitInSeconds: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutomaticFailoverEnabled`<sup>Required</sup> <a name="isAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.isAutomaticFailoverEnabled"></a>

```typescript
public readonly isAutomaticFailoverEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseBackupConfig`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```typescript
public readonly peerAutonomousContainerDatabaseBackupConfig: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList</a>

---

##### `peerAutonomousContainerDatabaseCompartmentId`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```typescript
public readonly peerAutonomousContainerDatabaseCompartmentId: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseDataguardAssociationId"></a>

```typescript
public readonly peerAutonomousContainerDatabaseDataguardAssociationId: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseDisplayName`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseDisplayName"></a>

```typescript
public readonly peerAutonomousContainerDatabaseDisplayName: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseId`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseId"></a>

```typescript
public readonly peerAutonomousContainerDatabaseId: string;
```

- *Type:* string

---

##### `peerAutonomousVmClusterId`<sup>Required</sup> <a name="peerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousVmClusterId"></a>

```typescript
public readonly peerAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `peerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerCloudAutonomousVmClusterId"></a>

```typescript
public readonly peerCloudAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `peerDbUniqueName`<sup>Required</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerDbUniqueName"></a>

```typescript
public readonly peerDbUniqueName: string;
```

- *Type:* string

---

##### `peerLifecycleState`<sup>Required</sup> <a name="peerLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerLifecycleState"></a>

```typescript
public readonly peerLifecycleState: string;
```

- *Type:* string

---

##### `peerRole`<sup>Required</sup> <a name="peerRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerRole"></a>

```typescript
public readonly peerRole: string;
```

- *Type:* string

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.protectionMode"></a>

```typescript
public readonly protectionMode: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `standbyMaintenanceBufferInDays`<sup>Required</sup> <a name="standbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.standbyMaintenanceBufferInDays"></a>

```typescript
public readonly standbyMaintenanceBufferInDays: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastRoleChanged`<sup>Required</sup> <a name="timeLastRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeLastRoleChanged"></a>

```typescript
public readonly timeLastRoleChanged: string;
```

- *Type:* string

---

##### `timeLastSynced`<sup>Required</sup> <a name="timeLastSynced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeLastSynced"></a>

```typescript
public readonly timeLastSynced: string;
```

- *Type:* string

---

##### `transportLag`<sup>Required</sup> <a name="transportLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.transportLag"></a>

```typescript
public readonly transportLag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations</a>

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">dbrsPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">internetProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">vpcPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpcUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbrsPolicyId`<sup>Required</sup> <a name="dbrsPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```typescript
public readonly dbrsPolicyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internetProxy`<sup>Required</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```typescript
public readonly internetProxy: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcPassword`<sup>Required</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```typescript
public readonly vpcPassword: string;
```

- *Type:* string

---

##### `vpcUser`<sup>Required</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```typescript
public readonly vpcUser: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails"></a>

```typescript
public readonly backupDestinationDetails: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a>

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig</a>

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>[]

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>

---




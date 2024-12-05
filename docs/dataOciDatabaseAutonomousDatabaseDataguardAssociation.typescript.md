# `dataOciDatabaseAutonomousDatabaseDataguardAssociation` Submodule <a name="`dataOciDatabaseAutonomousDatabaseDataguardAssociation` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseDataguardAssociation <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association oci_database_autonomous_database_dataguard_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig">DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig">DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseDataguardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseDataguardAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseDataguardAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousDatabaseDataguardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseDataguardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.applyLag">applyLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.applyRate">applyRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.peerAutonomousDatabaseId">peerAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.peerAutonomousDatabaseLifeCycleState">peerAutonomousDatabaseLifeCycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.peerRole">peerRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.protectionMode">protectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.timeLastRoleChanged">timeLastRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseDataguardAssociationIdInput">autonomousDatabaseDataguardAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseDataguardAssociationId">autonomousDatabaseDataguardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `applyLag`<sup>Required</sup> <a name="applyLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.applyLag"></a>

```typescript
public readonly applyLag: string;
```

- *Type:* string

---

##### `applyRate`<sup>Required</sup> <a name="applyRate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.applyRate"></a>

```typescript
public readonly applyRate: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `peerAutonomousDatabaseId`<sup>Required</sup> <a name="peerAutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.peerAutonomousDatabaseId"></a>

```typescript
public readonly peerAutonomousDatabaseId: string;
```

- *Type:* string

---

##### `peerAutonomousDatabaseLifeCycleState`<sup>Required</sup> <a name="peerAutonomousDatabaseLifeCycleState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.peerAutonomousDatabaseLifeCycleState"></a>

```typescript
public readonly peerAutonomousDatabaseLifeCycleState: string;
```

- *Type:* string

---

##### `peerRole`<sup>Required</sup> <a name="peerRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.peerRole"></a>

```typescript
public readonly peerRole: string;
```

- *Type:* string

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.protectionMode"></a>

```typescript
public readonly protectionMode: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastRoleChanged`<sup>Required</sup> <a name="timeLastRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.timeLastRoleChanged"></a>

```typescript
public readonly timeLastRoleChanged: string;
```

- *Type:* string

---

##### `autonomousDatabaseDataguardAssociationIdInput`<sup>Optional</sup> <a name="autonomousDatabaseDataguardAssociationIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseDataguardAssociationIdInput"></a>

```typescript
public readonly autonomousDatabaseDataguardAssociationIdInput: string;
```

- *Type:* string

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseIdInput"></a>

```typescript
public readonly autonomousDatabaseIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `autonomousDatabaseDataguardAssociationId`<sup>Required</sup> <a name="autonomousDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseDataguardAssociationId"></a>

```typescript
public readonly autonomousDatabaseDataguardAssociationId: string;
```

- *Type:* string

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseDataguardAssociation } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseDataguardAssociationConfig: dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.autonomousDatabaseDataguardAssociationId">autonomousDatabaseDataguardAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#autonomous_database_dataguard_association_id DataOciDatabaseAutonomousDatabaseDataguardAssociation#autonomous_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#autonomous_database_id DataOciDatabaseAutonomousDatabaseDataguardAssociation#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#id DataOciDatabaseAutonomousDatabaseDataguardAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousDatabaseDataguardAssociationId`<sup>Required</sup> <a name="autonomousDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.autonomousDatabaseDataguardAssociationId"></a>

```typescript
public readonly autonomousDatabaseDataguardAssociationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#autonomous_database_dataguard_association_id DataOciDatabaseAutonomousDatabaseDataguardAssociation#autonomous_database_dataguard_association_id}.

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#autonomous_database_id DataOciDatabaseAutonomousDatabaseDataguardAssociation#autonomous_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#id DataOciDatabaseAutonomousDatabaseDataguardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




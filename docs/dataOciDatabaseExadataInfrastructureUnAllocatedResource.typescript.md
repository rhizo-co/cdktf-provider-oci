# `dataOciDatabaseExadataInfrastructureUnAllocatedResource` Submodule <a name="`dataOciDatabaseExadataInfrastructureUnAllocatedResource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExadataInfrastructureUnAllocatedResource <a name="DataOciDatabaseExadataInfrastructureUnAllocatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource oci_database_exadata_infrastructure_un_allocated_resource}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructureUnAllocatedResource } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource(scope: Construct, id: string, config: DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig">DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig">DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.resetDbServers">resetDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDbServers` <a name="resetDbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.resetDbServers"></a>

```typescript
public resetDbServers(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExadataInfrastructureUnAllocatedResource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isConstruct"></a>

```typescript
import { dataOciDatabaseExadataInfrastructureUnAllocatedResource } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformElement"></a>

```typescript
import { dataOciDatabaseExadataInfrastructureUnAllocatedResource } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseExadataInfrastructureUnAllocatedResource } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseExadataInfrastructureUnAllocatedResource } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseExadataInfrastructureUnAllocatedResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseExadataInfrastructureUnAllocatedResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseExadataInfrastructureUnAllocatedResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExadataInfrastructureUnAllocatedResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.autonomousVmClusters">autonomousVmClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList">DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.exadataStorageInTbs">exadataStorageInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.localStorageInGbs">localStorageInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.dbServersInput">dbServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.exadataInfrastructureIdInput">exadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.dbServers">dbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomousVmClusters`<sup>Required</sup> <a name="autonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.autonomousVmClusters"></a>

```typescript
public readonly autonomousVmClusters: DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList">DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exadataStorageInTbs`<sup>Required</sup> <a name="exadataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.exadataStorageInTbs"></a>

```typescript
public readonly exadataStorageInTbs: number;
```

- *Type:* number

---

##### `localStorageInGbs`<sup>Required</sup> <a name="localStorageInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.localStorageInGbs"></a>

```typescript
public readonly localStorageInGbs: number;
```

- *Type:* number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.dbServersInput"></a>

```typescript
public readonly dbServersInput: string[];
```

- *Type:* string[]

---

##### `exadataInfrastructureIdInput`<sup>Optional</sup> <a name="exadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.exadataInfrastructureIdInput"></a>

```typescript
public readonly exadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters <a name="DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructureUnAllocatedResource } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters: dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters = { ... }
```


### DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig <a name="DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructureUnAllocatedResource } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig: dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#exadata_infrastructure_id DataOciDatabaseExadataInfrastructureUnAllocatedResource#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.dbServers">dbServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#db_servers DataOciDatabaseExadataInfrastructureUnAllocatedResource#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#id DataOciDatabaseExadataInfrastructureUnAllocatedResource#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#exadata_infrastructure_id DataOciDatabaseExadataInfrastructureUnAllocatedResource#exadata_infrastructure_id}.

---

##### `dbServers`<sup>Optional</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#db_servers DataOciDatabaseExadataInfrastructureUnAllocatedResource#db_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructure_un_allocated_resource#id DataOciDatabaseExadataInfrastructureUnAllocatedResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList <a name="DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructureUnAllocatedResource } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference <a name="DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructureUnAllocatedResource } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.unAllocatedAdbStorageInTbs">unAllocatedAdbStorageInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters">DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `unAllocatedAdbStorageInTbs`<sup>Required</sup> <a name="unAllocatedAdbStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.unAllocatedAdbStorageInTbs"></a>

```typescript
public readonly unAllocatedAdbStorageInTbs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClustersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructureUnAllocatedResource.DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters">DataOciDatabaseExadataInfrastructureUnAllocatedResourceAutonomousVmClusters</a>

---




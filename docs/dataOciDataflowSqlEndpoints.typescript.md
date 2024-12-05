# `dataOciDataflowSqlEndpoints` Submodule <a name="`dataOciDataflowSqlEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataflowSqlEndpoints <a name="DataOciDataflowSqlEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints oci_dataflow_sql_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints(scope: Construct, id: string, config?: DataOciDataflowSqlEndpointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig">DataOciDataflowSqlEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig">DataOciDataflowSqlEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetSqlEndpointId">resetSqlEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataflowSqlEndpointsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter">DataOciDataflowSqlEndpointsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSqlEndpointId` <a name="resetSqlEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetSqlEndpointId"></a>

```typescript
public resetSqlEndpointId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataflowSqlEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isConstruct"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformElement"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformDataSource"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.generateConfigForImport"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataflowSqlEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataflowSqlEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataflowSqlEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataflowSqlEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList">DataOciDataflowSqlEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.sqlEndpointCollection">sqlEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList">DataOciDataflowSqlEndpointsSqlEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter">DataOciDataflowSqlEndpointsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.sqlEndpointIdInput">sqlEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.sqlEndpointId">sqlEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.filter"></a>

```typescript
public readonly filter: DataOciDataflowSqlEndpointsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList">DataOciDataflowSqlEndpointsFilterList</a>

---

##### `sqlEndpointCollection`<sup>Required</sup> <a name="sqlEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.sqlEndpointCollection"></a>

```typescript
public readonly sqlEndpointCollection: DataOciDataflowSqlEndpointsSqlEndpointCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList">DataOciDataflowSqlEndpointsSqlEndpointCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataflowSqlEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter">DataOciDataflowSqlEndpointsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sqlEndpointIdInput`<sup>Optional</sup> <a name="sqlEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.sqlEndpointIdInput"></a>

```typescript
public readonly sqlEndpointIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sqlEndpointId`<sup>Required</sup> <a name="sqlEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.sqlEndpointId"></a>

```typescript
public readonly sqlEndpointId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataflowSqlEndpointsConfig <a name="DataOciDataflowSqlEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDataflowSqlEndpointsConfig: dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#compartment_id DataOciDataflowSqlEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#display_name DataOciDataflowSqlEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter">DataOciDataflowSqlEndpointsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#id DataOciDataflowSqlEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.sqlEndpointId">sqlEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#sql_endpoint_id DataOciDataflowSqlEndpoints#sql_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#state DataOciDataflowSqlEndpoints#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#compartment_id DataOciDataflowSqlEndpoints#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#display_name DataOciDataflowSqlEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataflowSqlEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter">DataOciDataflowSqlEndpointsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#filter DataOciDataflowSqlEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#id DataOciDataflowSqlEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sqlEndpointId`<sup>Optional</sup> <a name="sqlEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.sqlEndpointId"></a>

```typescript
public readonly sqlEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#sql_endpoint_id DataOciDataflowSqlEndpoints#sql_endpoint_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#state DataOciDataflowSqlEndpoints#state}.

---

### DataOciDataflowSqlEndpointsFilter <a name="DataOciDataflowSqlEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDataflowSqlEndpointsFilter: dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#name DataOciDataflowSqlEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#values DataOciDataflowSqlEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#regex DataOciDataflowSqlEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#name DataOciDataflowSqlEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#values DataOciDataflowSqlEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#regex DataOciDataflowSqlEndpoints#regex}.

---

### DataOciDataflowSqlEndpointsSqlEndpointCollection <a name="DataOciDataflowSqlEndpointsSqlEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollection.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDataflowSqlEndpointsSqlEndpointCollection: dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollection = { ... }
```


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItems <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItems.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDataflowSqlEndpointsSqlEndpointCollectionItems: dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItems = { ... }
```


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig: dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig = { ... }
```


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig: dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig = { ... }
```


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration: dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration = { ... }
```


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules: dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataflowSqlEndpointsFilterList <a name="DataOciDataflowSqlEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataflowSqlEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter">DataOciDataflowSqlEndpointsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataflowSqlEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter">DataOciDataflowSqlEndpointsFilter</a>[]

---


### DataOciDataflowSqlEndpointsFilterOutputReference <a name="DataOciDataflowSqlEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter">DataOciDataflowSqlEndpointsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataflowSqlEndpointsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter">DataOciDataflowSqlEndpointsFilter</a>

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.get"></a>

```typescript
public get(index: number): DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig</a>

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.get"></a>

```typescript
public get(index: number): DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig</a>

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.get"></a>

```typescript
public get(index: number): DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.ipNotation">ipNotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.vcnIps">vcnIps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipNotation`<sup>Required</sup> <a name="ipNotation" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.ipNotation"></a>

```typescript
public readonly ipNotation: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `vcnIps`<sup>Required</sup> <a name="vcnIps" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.vcnIps"></a>

```typescript
public readonly vcnIps: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules</a>

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.get"></a>

```typescript
public get(index: number): DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.accessControlRules">accessControlRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.hostNamePrefix">hostNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.publicEndpointIp">publicEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessControlRules`<sup>Required</sup> <a name="accessControlRules" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.accessControlRules"></a>

```typescript
public readonly accessControlRules: DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList</a>

---

##### `hostNamePrefix`<sup>Required</sup> <a name="hostNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.hostNamePrefix"></a>

```typescript
public readonly hostNamePrefix: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

---

##### `publicEndpointIp`<sup>Required</sup> <a name="publicEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.publicEndpointIp"></a>

```typescript
public readonly publicEndpointIp: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration</a>

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.driverShape">driverShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.driverShapeConfig">driverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.executorShape">executorShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.executorShapeConfig">executorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.jdbcEndpointUrl">jdbcEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.lakeId">lakeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.maxExecutorCount">maxExecutorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.minExecutorCount">minExecutorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.sparkAdvancedConfigurations">sparkAdvancedConfigurations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.sqlEndpointVersion">sqlEndpointVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.warehouseBucketUri">warehouseBucketUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItems">DataOciDataflowSqlEndpointsSqlEndpointCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `driverShape`<sup>Required</sup> <a name="driverShape" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.driverShape"></a>

```typescript
public readonly driverShape: string;
```

- *Type:* string

---

##### `driverShapeConfig`<sup>Required</sup> <a name="driverShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.driverShapeConfig"></a>

```typescript
public readonly driverShapeConfig: DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList</a>

---

##### `executorShape`<sup>Required</sup> <a name="executorShape" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.executorShape"></a>

```typescript
public readonly executorShape: string;
```

- *Type:* string

---

##### `executorShapeConfig`<sup>Required</sup> <a name="executorShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.executorShapeConfig"></a>

```typescript
public readonly executorShapeConfig: DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jdbcEndpointUrl`<sup>Required</sup> <a name="jdbcEndpointUrl" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.jdbcEndpointUrl"></a>

```typescript
public readonly jdbcEndpointUrl: string;
```

- *Type:* string

---

##### `lakeId`<sup>Required</sup> <a name="lakeId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.lakeId"></a>

```typescript
public readonly lakeId: string;
```

- *Type:* string

---

##### `maxExecutorCount`<sup>Required</sup> <a name="maxExecutorCount" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.maxExecutorCount"></a>

```typescript
public readonly maxExecutorCount: number;
```

- *Type:* number

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `minExecutorCount`<sup>Required</sup> <a name="minExecutorCount" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.minExecutorCount"></a>

```typescript
public readonly minExecutorCount: number;
```

- *Type:* number

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList</a>

---

##### `sparkAdvancedConfigurations`<sup>Required</sup> <a name="sparkAdvancedConfigurations" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.sparkAdvancedConfigurations"></a>

```typescript
public readonly sparkAdvancedConfigurations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `sqlEndpointVersion`<sup>Required</sup> <a name="sqlEndpointVersion" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.sqlEndpointVersion"></a>

```typescript
public readonly sqlEndpointVersion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `warehouseBucketUri`<sup>Required</sup> <a name="warehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.warehouseBucketUri"></a>

```typescript
public readonly warehouseBucketUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataflowSqlEndpointsSqlEndpointCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItems">DataOciDataflowSqlEndpointsSqlEndpointCollectionItems</a>

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionList <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataflowSqlEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollection">DataOciDataflowSqlEndpointsSqlEndpointCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataflowSqlEndpointsSqlEndpointCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollection">DataOciDataflowSqlEndpointsSqlEndpointCollection</a>

---




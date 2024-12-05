# `dataOciDatasciencePrivateEndpoints` Submodule <a name="`dataOciDatasciencePrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatasciencePrivateEndpoints <a name="DataOciDatasciencePrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints oci_datascience_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.Initializer"></a>

```typescript
import { dataOciDatasciencePrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints(scope: Construct, id: string, config: DataOciDatasciencePrivateEndpointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig">DataOciDatasciencePrivateEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig">DataOciDatasciencePrivateEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetDataScienceResourceType">resetDataScienceResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatasciencePrivateEndpointsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter">DataOciDatasciencePrivateEndpointsFilter</a>[]

---

##### `resetCreatedBy` <a name="resetCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetCreatedBy"></a>

```typescript
public resetCreatedBy(): void
```

##### `resetDataScienceResourceType` <a name="resetDataScienceResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetDataScienceResourceType"></a>

```typescript
public resetDataScienceResourceType(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatasciencePrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.isConstruct"></a>

```typescript
import { dataOciDatasciencePrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.isTerraformElement"></a>

```typescript
import { dataOciDatasciencePrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.isTerraformDataSource"></a>

```typescript
import { dataOciDatasciencePrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.generateConfigForImport"></a>

```typescript
import { dataOciDatasciencePrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatasciencePrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatasciencePrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatasciencePrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatasciencePrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.dataSciencePrivateEndpoints">dataSciencePrivateEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList">DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList">DataOciDatasciencePrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.createdByInput">createdByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.dataScienceResourceTypeInput">dataScienceResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter">DataOciDatasciencePrivateEndpointsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.dataScienceResourceType">dataScienceResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dataSciencePrivateEndpoints`<sup>Required</sup> <a name="dataSciencePrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.dataSciencePrivateEndpoints"></a>

```typescript
public readonly dataSciencePrivateEndpoints: DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList">DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.filter"></a>

```typescript
public readonly filter: DataOciDatasciencePrivateEndpointsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList">DataOciDatasciencePrivateEndpointsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.createdByInput"></a>

```typescript
public readonly createdByInput: string;
```

- *Type:* string

---

##### `dataScienceResourceTypeInput`<sup>Optional</sup> <a name="dataScienceResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.dataScienceResourceTypeInput"></a>

```typescript
public readonly dataScienceResourceTypeInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatasciencePrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter">DataOciDatasciencePrivateEndpointsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `dataScienceResourceType`<sup>Required</sup> <a name="dataScienceResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.dataScienceResourceType"></a>

```typescript
public readonly dataScienceResourceType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatasciencePrivateEndpointsConfig <a name="DataOciDatasciencePrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.Initializer"></a>

```typescript
import { dataOciDatasciencePrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePrivateEndpointsConfig: dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#compartment_id DataOciDatasciencePrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.createdBy">createdBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#created_by DataOciDatasciencePrivateEndpoints#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.dataScienceResourceType">dataScienceResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#data_science_resource_type DataOciDatasciencePrivateEndpoints#data_science_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#display_name DataOciDatasciencePrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter">DataOciDatasciencePrivateEndpointsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#id DataOciDatasciencePrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#state DataOciDatasciencePrivateEndpoints#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#compartment_id DataOciDatasciencePrivateEndpoints#compartment_id}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#created_by DataOciDatasciencePrivateEndpoints#created_by}.

---

##### `dataScienceResourceType`<sup>Optional</sup> <a name="dataScienceResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.dataScienceResourceType"></a>

```typescript
public readonly dataScienceResourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#data_science_resource_type DataOciDatasciencePrivateEndpoints#data_science_resource_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#display_name DataOciDatasciencePrivateEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatasciencePrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter">DataOciDatasciencePrivateEndpointsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#filter DataOciDatasciencePrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#id DataOciDatasciencePrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#state DataOciDatasciencePrivateEndpoints#state}.

---

### DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpoints <a name="DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpoints.Initializer"></a>

```typescript
import { dataOciDatasciencePrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePrivateEndpointsDataSciencePrivateEndpoints: dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpoints = { ... }
```


### DataOciDatasciencePrivateEndpointsFilter <a name="DataOciDatasciencePrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter.Initializer"></a>

```typescript
import { dataOciDatasciencePrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePrivateEndpointsFilter: dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#name DataOciDatasciencePrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#values DataOciDatasciencePrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#regex DataOciDatasciencePrivateEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#name DataOciDatasciencePrivateEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#values DataOciDatasciencePrivateEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_private_endpoints#regex DataOciDatasciencePrivateEndpoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList <a name="DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.Initializer"></a>

```typescript
import { dataOciDatasciencePrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.get"></a>

```typescript
public get(index: number): DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference <a name="DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.Initializer"></a>

```typescript
import { dataOciDatasciencePrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.dataScienceResourceType">dataScienceResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.subDomain">subDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpoints">DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `dataScienceResourceType`<sup>Required</sup> <a name="dataScienceResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.dataScienceResourceType"></a>

```typescript
public readonly dataScienceResourceType: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subDomain`<sup>Required</sup> <a name="subDomain" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.subDomain"></a>

```typescript
public readonly subDomain: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpoints">DataOciDatasciencePrivateEndpointsDataSciencePrivateEndpoints</a>

---


### DataOciDatasciencePrivateEndpointsFilterList <a name="DataOciDatasciencePrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.Initializer"></a>

```typescript
import { dataOciDatasciencePrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatasciencePrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter">DataOciDatasciencePrivateEndpointsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatasciencePrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter">DataOciDatasciencePrivateEndpointsFilter</a>[]

---


### DataOciDatasciencePrivateEndpointsFilterOutputReference <a name="DataOciDatasciencePrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatasciencePrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter">DataOciDatasciencePrivateEndpointsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatasciencePrivateEndpointsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePrivateEndpoints.DataOciDatasciencePrivateEndpointsFilter">DataOciDatasciencePrivateEndpointsFilter</a>

---



